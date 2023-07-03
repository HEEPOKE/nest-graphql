import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
import { UserResolver } from '../users/users.resolver';
import { UserService } from '../users/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //   autoSchemaFile: join(process.cwd(), 'src/schemas/*.graphql'),
      autoSchemaFile: true,
      path: '/nest',
      playground: true,
    }),
  ],
  providers: [UserResolver, UserService],
})
export class GraphqlModule {}
