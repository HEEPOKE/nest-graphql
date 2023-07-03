import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from './modules/users/users.module';
import { GraphqlModule } from './modules/graphql/graphql.module';

@Module({
  imports: [PrismaModule, UserModule, GraphqlModule],
})
export class ApisModule {}
