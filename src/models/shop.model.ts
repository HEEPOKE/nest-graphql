import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShopModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  telephone?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
