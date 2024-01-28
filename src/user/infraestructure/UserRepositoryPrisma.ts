import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../domain/IUserRepository";
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

  async update(email: string, name: string, password: string): Promise<User> {
    const userUpdated = await this.prisma.user.update({
      where: { email },
      data: { name, password },
    });

    return new User(
      userUpdated.email,
      userUpdated.name,
      userUpdated.password,
      userUpdated.createdAt,
      userUpdated.updatedAt
    );
  }

}
