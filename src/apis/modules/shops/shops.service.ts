import { Injectable } from '@nestjs/common';
import { Shop } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShopInput, UpdateShopInput } from './dto/shop.dto';

@Injectable()
export class ShopService {
  constructor(private readonly prisma: PrismaService) {}

  async getShop(id: number): Promise<Shop> {
    return this.prisma.shop.findUnique({ where: { id } });
  }

  async getShops(): Promise<Shop[]> {
    return this.prisma.shop.findMany();
  }

  async createShop(data: CreateShopInput): Promise<Shop> {
    return this.prisma.shop.create({ data });
  }

  async updateShop(id: number, data: UpdateShopInput): Promise<Shop> {
    return this.prisma.shop.update({ where: { id }, data });
  }

  async deleteShop(id: number): Promise<Shop> {
    return this.prisma.shop.delete({ where: { id } });
  }
}
