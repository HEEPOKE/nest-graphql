import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserService } from './users.service';
import { UserModel } from 'src/models/user.model';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel)
  async getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Query(() => [UserModel])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => UserModel)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Mutation(() => UserModel)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Mutation(() => UserModel)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
