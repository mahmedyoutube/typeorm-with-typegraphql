import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class AddProductToCartArgs {
  @Field()
  pic: string;
  @Field()
  description: string;
  @Field()
  price: number;
}
