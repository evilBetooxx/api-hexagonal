import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";
import { IBcryptRepository } from "../services/IBcryptRepository";

export class CreateUser {
  constructor(private readonly repository: IUserRepository, readonly bycript: IBcryptRepository ) {}

  async run(email: string, name: string, password: string): Promise<User> {
    const createdAt = new Date();
    const updatedAt = new Date();

    const hashedPassword = await this.bycript.hashPassword(password);

    const user = new User(email, name, hashedPassword, createdAt, updatedAt);
    return await this.repository.create(user);
  }
}
