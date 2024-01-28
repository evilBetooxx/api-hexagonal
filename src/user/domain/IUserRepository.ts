import { User } from "./User";

export interface IUserRepository {
    create(user: User): Promise<User>;
    update(email: string, name: string, password: string): Promise<User>;
}   