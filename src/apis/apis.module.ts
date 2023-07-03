import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class ApisModule {}
