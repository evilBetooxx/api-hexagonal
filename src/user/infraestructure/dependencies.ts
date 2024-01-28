import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UserRepositoryPrisma } from "./UserRepositoryPrisma";
import { CreateUser } from "../application/CreateUser";
import { UpdateUser } from "../application/UpdateUser";

const repository = new UserRepositoryPrisma();


const createUserUseCase = new CreateUser(repository);
export const createUserController = new CreateUserController(createUserUseCase);

const updateUserUseCase = new UpdateUser(repository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
