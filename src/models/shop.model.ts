import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Shop {
  @Field()
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
