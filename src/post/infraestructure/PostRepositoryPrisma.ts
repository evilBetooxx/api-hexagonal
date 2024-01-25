import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../interfaces/ports/IPostRepository";
import { Post } from "../domain/Post";

export class PostRepositoryPrisma implements IPostRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(post: Post): Promise<Post> {
    const postSaved = await this.prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      },
    });

    return new Post(
      postSaved.title,
      postSaved.content,
      postSaved.createdAt,
      postSaved.updatedAt
    );
  }
}
