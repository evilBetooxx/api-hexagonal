import { Router } from "express";
import { UserRepositoryPrisma } from "../../infraestructure/UserRepositoryPrisma";
import { CreateUser } from "../../application/CreateUser";

const UserRouter = Router();
const userRepository = new UserRepositoryPrisma();
const createUser = new CreateUser(userRepository);

UserRouter.post('/create', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await createUser.run(email, name, password);
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// soon find by id, find all, update, delete

export default UserRouter;