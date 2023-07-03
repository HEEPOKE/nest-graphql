import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResolver } from './users.resolver';

@Module({
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModule {}
