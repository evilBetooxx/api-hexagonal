import { Router } from "express";
import { CreatePost } from "../../application/CreatePost";
import { PostRepositoryPrisma } from "../../infraestructure/PostRepositoryPrisma";

const PostRouter = Router();
const postRepository = new PostRepositoryPrisma();
const createPost = new CreatePost(postRepository);

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

// soon find by id, find all, update, delete

export default PostRouter;

