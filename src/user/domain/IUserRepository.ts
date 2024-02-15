import { User } from "./User";

export interface IUserRepository {
    create(user: User): Promise<User>;
    update(email: string, name: string, password: string): Promise<User>;
    // hashPassword(password: string): Promise<string>;
    // comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>;
}   