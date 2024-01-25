import { Post } from "../../domain/Post";

export interface IPostRepository {
    create(post: Post): Promise<Post>;
}