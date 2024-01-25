import { Router } from "express";
import { UserRepositoryPrisma } from "../../infraestructure/UserRepositoryPrisma";
import { CreateUser } from "../../application/CreateUser";
import { UpdateUser } from "../../application/UpdateUser";

const UserRouter = Router();
const userRepository = new UserRepositoryPrisma();
const createUser = new CreateUser(userRepository);
const updateUser = new UpdateUser(userRepository);

UserRouter.post('/create', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await createUser.run(email, name, password);
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

UserRouter.put('/update', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const updatedUser = await updateUser.run(email, name, password);
        res.status(200).json({ user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

export default UserRouter;