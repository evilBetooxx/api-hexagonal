import { Request, Response } from "express";
import { UpdatePost } from "../../application/UpdatePost";

export class UpdatePostController {
    constructor(private readonly updatePostUseCase: UpdatePost) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const { id, title, content } = req.body;
            const post = await this.updatePostUseCase.run(id, title, content);
            res.status(200).json({ post });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocurrió un error" });
        }
    }
}
