import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UserRepositoryPrisma } from "./UserRepositoryPrisma";
import { CreateUser } from "../application/usecases/CreateUseCase";
import { UpdateUser } from "../application/usecases/UpdateUseCase";
import { BcryptUtility } from "./utilities/BcryptUtility";

import { NotificationNewUser } from "./services/RabbitMQ/NotificationNewUser";

const repository = new UserRepositoryPrisma();
const encryptPassword = new BcryptUtility()
const rabbit = new NotificationNewUser();

const createUserUseCase = new CreateUser(repository, encryptPassword, rabbit);
export const createUserController = new CreateUserController(createUserUseCase);

const updateUserUseCase = new UpdateUser(repository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
