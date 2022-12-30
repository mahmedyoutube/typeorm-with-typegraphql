import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Product } from "../../schema/Product";
import { User } from "../../schema/User";
import { IGraphQLCotext } from "../../../global/types";
import { Cart } from "../../schema/Cart";

@Resolver(() => User)
export class CartResolver {
  @Query(() => [Cart], { nullable: true })
  async carts(): Promise<Cart[] | null> {
    return await Cart.find({
      relations: {
        products: {
          user: {
            profile: true,
          },
        },
      },
    });
  }

  @Authorized()
  @Mutation(() => Cart, { nullable: true })
  async addProductToCart(
    @Arg("productId")
    productId: number
  ) {
    const product = await Product.findOneBy({ id: productId });

    const cart = Cart.create({ products: [product!] });
    await cart.save();

    return cart;
  }
}
