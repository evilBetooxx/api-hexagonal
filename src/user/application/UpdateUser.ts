import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/User";

export class UpdateUser {
    constructor(private readonly repository: IUserRepository) {}

    async run (email: string, name: string, password: string): Promise<User> {
        const updatedUser = await this.repository.update(email, name, password);
        return updatedUser;
    }
}
