import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class CreateNewProductArgs {
  @Field()
  pic: string;
  @Field()
  description: string;
  @Field()
  price: number;
}
