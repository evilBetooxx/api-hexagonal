import { CreatePostController } from "./controllers/CreatePostController";
import { UpdatePostController } from "./controllers/UpdatePostController";
import { PostRepositoryPrisma } from "./PostRepositoryPrisma";
import { CreatePost } from "../application/CreatePost";
import { UpdatePost } from "../application/UpdatePost";

const postRepository = new PostRepositoryPrisma();

const createPostUseCase = new CreatePost(postRepository);
export const createPostController = new CreatePostController(createPostUseCase);

const updatePostUseCase = new UpdatePost(postRepository);
export const updatePostController = new UpdatePostController(updatePostUseCase);
