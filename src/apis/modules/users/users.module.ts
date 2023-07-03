import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [UserService, UserResolver, ConfigService],
})
export class UserModule {}
