import { Request, Response } from "express";
import { UpdateUser } from "../../application/usecases/UpdateUseCase";

export class UpdateUserController {
    constructor(private readonly updateUserUseCase: UpdateUser) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const { email, name, password } = req.body;
            const updatedUser = await this.updateUserUseCase.run(email, name, password);
            res.status(200).json({ user: updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}
