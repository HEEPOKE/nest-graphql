import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShopModel } from 'src/models/shop.model';
import { ShopService } from './shops.service';
import { CreateShopInput, UpdateShopInput } from './dto/shop.dto';

@Resolver(() => ShopModel)
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

  @Query(() => ShopModel, { description: 'Get a shop by ID' })
  async getShop(
    @Args('id', { type: () => Int, description: 'The ID of the shop' })
    id: number,
  ): Promise<ShopModel> {
    return this.shopService.getShop(id);
  }

  @Query(() => [ShopModel], { description: 'Get all shops' })
  async getShops(): Promise<ShopModel[]> {
    return this.shopService.getShops();
  }

  @Mutation(() => ShopModel, { description: 'Create a new shop' })
  async createShop(@Args('data') data: CreateShopInput): Promise<ShopModel> {
    return this.shopService.createShop(data);
  }

  @Mutation(() => ShopModel, { description: 'Update an existing shop' })
  async updateShop(
    @Args('id', { type: () => Int, description: 'The ID of the shop' })
    id: number,
    @Args('data') data: UpdateShopInput,
  ): Promise<ShopModel> {
    return this.shopService.updateShop(id, data);
  }

  @Mutation(() => ShopModel, { description: 'Delete a shop' })
  async deleteShop(
    @Args('id', { type: () => Int, description: 'The ID of the shop' })
    id: number,
  ): Promise<ShopModel> {
    return this.shopService.deleteShop(id);
  }
}
