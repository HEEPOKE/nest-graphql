import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
