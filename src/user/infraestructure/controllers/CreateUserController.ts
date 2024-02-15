import { Request, Response } from "express";
import { CreateUser } from "../../application/usecases/CreateUseCase";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUser) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const { email, name, password } = req.body;
            const user = await this.createUserUseCase.run(email, name, password);
            res.status(201).json({ user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}