import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserService } from './users.service';
import { UserModel } from 'src/models/user.model';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel, { description: 'Get a user by ID' })
  async getUser(
    @Args('id', { type: () => Int, description: 'The ID of the user' })
    id: number,
  ): Promise<UserModel> {
    return this.userService.getUser(id);
  }

  @Query(() => [UserModel], { description: 'Get all users' })
  async getUsers(): Promise<UserModel[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => UserModel, { description: 'Create a new user' })
  async createUser(@Args('data') data: CreateUserInput): Promise<UserModel> {
    return this.userService.createUser(data);
  }

  @Mutation(() => UserModel, { description: 'Update an existing user' })
  async updateUser(
    @Args('id', { type: () => Int, description: 'The ID of the user' })
    id: number,
    @Args('data') data: UpdateUserInput,
  ): Promise<UserModel> {
    return this.userService.updateUser(id, data);
  }

  @Mutation(() => UserModel, { description: 'Delete a user' })
  async deleteUser(
    @Args('id', { type: () => Int, description: 'The ID of the user' })
    id: number,
  ): Promise<UserModel> {
    return this.userService.deleteUser(id);
  }
}
