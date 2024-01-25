import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/ports/IUserRepository";
import { User } from "../domain/User";

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    const userSaved = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

    return new User(
      userSaved.email,
      userSaved.name,
      userSaved.password,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }
}
