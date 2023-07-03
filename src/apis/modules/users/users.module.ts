import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';

@Module({
  imports: [ConfigModule],
  providers: [PrismaService, UserService, UserResolver, ConfigService],
})
export class UserModule {}
