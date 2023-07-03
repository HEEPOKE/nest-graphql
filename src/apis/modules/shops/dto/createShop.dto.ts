import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateShopInput implements Prisma.ShopCreateInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  telephone?: string;
}
