import {
  Arg,
  Args,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { UserSchema as User } from "../../schema/UserSchema";
import { CreateNewProductArgs } from "./types";
import { ProductSchema } from "../../schema/ProductSchema";

@Resolver(() => User)
export class ProductResolver {
  @FieldResolver(() => User, { nullable: true })
  async user(@Root() product: ProductSchema) {
    return;
  }

  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    return [];
  }

  @Mutation(() => ProductSchema, { nullable: true })
  async createProduct(
    @Args()
    { name, description }: CreateNewProductArgs
  ) {
    console.log("create new Product  ", name, description);
  }
}
