import { Router } from "express";
import { createPostController, updatePostController } from './dependencies';

const PostRouter = Router();

PostRouter.post('/create', createPostController.run.bind(createPostController));
PostRouter.put('/update', updatePostController.run.bind(updatePostController));

export default PostRouter;
