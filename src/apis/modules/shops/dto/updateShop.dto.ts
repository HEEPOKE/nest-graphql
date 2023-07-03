import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateShopInput } from './createShop.dto';

@InputType()
export class UpdateShopInput extends PartialType(CreateShopInput) {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  telephone?: string;
}
