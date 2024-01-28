import { Request, Response } from "express";
import { CreatePost } from "../../application/CreatePost";

export class CreatePostController {
    constructor(private readonly createPostUseCase: CreatePost) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const { title, content } = req.body;
            const post = await this.createPostUseCase.run(title, content);
            res.status(201).json({ post });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocurrió un error" });
        }
    }
}
