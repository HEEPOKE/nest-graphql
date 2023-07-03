import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateShopInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  telephone?: string;
}
