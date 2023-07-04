import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number): Promise<UserModel> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUsers(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: CreateUserInput): Promise<UserModel> {
    return this.prisma.user.create({ data });
  }

  async updateUser(id: number, data: UpdateUserInput): Promise<UserModel> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<UserModel> {
    return this.prisma.user.delete({ where: { id } });
  }
}
