import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field()
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
