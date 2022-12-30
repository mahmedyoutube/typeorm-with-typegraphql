import {
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { CreateNewProductArgs } from "./types";
import { Product } from "../../schema/Product";
import { User } from "../../schema/User";
import { IGraphQLCotext } from "../../../global/types";

@Resolver(() => User)
export class ProductResolver {
  @Query(() => [Product], { nullable: true })
  async products(): Promise<Product[] | null> {
    return await Product.find({
      relations: {
        user: { profile: { user: true }, products: true, },
        cart: true,
      },
    });
  }

  @Authorized()
  @Mutation(() => Product, { nullable: true })
  async createProduct(
    @Args()
    { pic, description, price }: CreateNewProductArgs,
    @Ctx() { currentUser }: IGraphQLCotext
  ) {
    const user = await User.findOneBy({ id: currentUser!.id });
    const product = Product.create({ pic, description, price, user: user! });
    await product.save();
    return product;
  }
}
