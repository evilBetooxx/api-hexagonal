import { Router } from "express";
import { createUserController, updateUserController } from './dependencies'

const UserRouter = Router()

UserRouter.post('/create', createUserController.run.bind(createUserController))
UserRouter.put('/update', updateUserController.run.bind(updateUserController))

export default UserRouter;
