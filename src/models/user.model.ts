import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  tel?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
