import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateUserInput implements Prisma.UserCreateInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  tel?: string;
}
