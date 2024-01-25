import { IPostRepository } from "../interfaces/ports/IPostRepository";
import { Post } from "../domain/Post";

export class UpdatePost {
    constructor(private readonly repository: IPostRepository) {}

    async run(postId: string, title: string, content: string): Promise<Post> {
        const updatedPost = await this.repository.update(postId, title, content);
        return updatedPost;
    }
}