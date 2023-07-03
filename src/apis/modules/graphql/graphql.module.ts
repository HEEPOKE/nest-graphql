import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from '../users/users.resolver';
import { UserService } from '../users/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: '/apis/nest',
      playground: true,
    }),
    PrismaModule,
  ],
  providers: [UserResolver, UserService],
})
export class GraphqlModule {}
