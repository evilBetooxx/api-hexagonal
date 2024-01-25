import { User } from "../../domain/User";

export interface IUserRepository {
    create(user: User): Promise<User>;
}