import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";
import { IBcryptRepository } from "../services/IBcryptRepository";
import { INotificationNewUser } from "../../domain/services/INotificationNewUser";

export class CreateUser {
  constructor(private readonly repository: IUserRepository, readonly bycript: IBcryptRepository, readonly rabit: INotificationNewUser ) {}

  async run(email: string, name: string, password: string): Promise<void> {
    const createdAt = new Date();
    const updatedAt = new Date();

    const hashedPassword = await this.bycript.hashPassword(password);

    const user = new User(email, name, hashedPassword, createdAt, updatedAt);
    
    await this.repository.create(user);
    await this.rabit.sendNotification(user);
  }
}
