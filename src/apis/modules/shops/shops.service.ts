import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShopInput, UpdateShopInput } from './dto/shop.dto';
import { ShopModel } from 'src/models/shop.model';

@Injectable()
export class ShopService {
  constructor(private readonly prisma: PrismaService) {}

  async getShop(id: number): Promise<ShopModel> {
    return this.prisma.shop.findUnique({ where: { id } });
  }

  async getShops(): Promise<ShopModel[]> {
    return this.prisma.shop.findMany();
  }

  async createShop(data: CreateShopInput): Promise<ShopModel> {
    return this.prisma.shop.create({ data });
  }

  async updateShop(id: number, data: UpdateShopInput): Promise<ShopModel> {
    return this.prisma.shop.update({ where: { id }, data });
  }

  async deleteShop(id: number): Promise<ShopModel> {
    return this.prisma.shop.delete({ where: { id } });
  }
}
