import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(id: number, data: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
