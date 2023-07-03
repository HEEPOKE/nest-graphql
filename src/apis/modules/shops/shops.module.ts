import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShopResolver } from './shops.resolver';
import { ShopService } from './shops.service';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [ShopResolver, ShopService, ConfigService],
})
export class ShopModule {}
