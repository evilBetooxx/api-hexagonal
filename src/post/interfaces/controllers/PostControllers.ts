import { Router } from "express";
import { CreatePost } from "../../application/CreatePost";
import { PostRepositoryPrisma } from "../../infraestructure/PostRepositoryPrisma";
import { UpdatePost } from "../../application/UpdatePost";

const PostRouter = Router();
const postRepository = new PostRepositoryPrisma();
const createPost = new CreatePost(postRepository);
const updatePost = new UpdatePost(postRepository);

PostRouter.post('/create', async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await createPost.run(title, content);
        res.status(201).json({ post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error" });
    }
});

PostRouter.put('/update', async (req, res) => {
    try {
        const { postId, title, content } = req.body;
        const post = await updatePost.run(postId, title, content);
        res.status(200).json({ post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error" });
    }
});

export default PostRouter;

