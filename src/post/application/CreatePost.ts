import { IPostRepository } from "../interfaces/ports/IPostRepository";
import { Post } from "../domain/Post";

export class CreatePost {
    constructor(private readonly repository: IPostRepository) {}

    async run(title: string, content: string): Promise<Post> {
        const createdAt = new Date();
        const updatedAt = new Date();

        const post = new Post(title, content, createdAt, updatedAt);
        return await this.repository.create(post);
    }
}