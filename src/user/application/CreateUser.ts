import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/User";

export class CreateUser {
    constructor(private readonly repository: IUserRepository) {}

    async run(email: string, name: string, password: string): Promise<User> {
        const createdAt = new Date();
        const updatedAt = new Date();
        
        const user = new User(email, name, password, createdAt, updatedAt);
        return await this.repository.create(user);
    }
}