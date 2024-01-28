import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../domain/IPostRepository";
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

  async update(postId: string, title: string, content: string): Promise<Post> {
    try {
        const postUpdated = await this.prisma.post.update({
            where: { id: postId },
            data: {
                title,
                content,
            },
        });

        return new Post(
            postUpdated.title,
            postUpdated.content,
            postUpdated.createdAt,
            postUpdated.updatedAt,
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la publicación');
    }
}
}
