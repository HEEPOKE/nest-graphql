import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './user.dto';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  tel?: string;
}
