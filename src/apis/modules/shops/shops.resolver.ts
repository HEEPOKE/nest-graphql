import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShopModel } from 'src/models/shop.model';
import { ShopService } from './shops.service';
import { CreateShopInput, UpdateShopInput } from './dto/shop.dto';

@Resolver(() => ShopModel)
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

  @Query(() => ShopModel)
  async getShop(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ShopModel> {
    return this.shopService.getShop(id);
  }

  @Query(() => [ShopModel])
  async getShops(): Promise<ShopModel[]> {
    return this.shopService.getShops();
  }

  @Mutation(() => ShopModel)
  async createShop(@Args('data') data: CreateShopInput): Promise<ShopModel> {
    return this.shopService.createShop(data);
  }

  @Mutation(() => ShopModel)
  async updateShop(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateShopInput,
  ): Promise<ShopModel> {
    return this.shopService.updateShop(id, data);
  }

  @Mutation(() => ShopModel)
  async deleteShop(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ShopModel> {
    return this.shopService.deleteShop(id);
  }
}
