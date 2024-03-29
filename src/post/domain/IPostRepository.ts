import { Post } from "./Post";

export interface IPostRepository {
    create(post: Post): Promise<Post>;
    update(postId: string, title: string, content: string): Promise<Post>;
}