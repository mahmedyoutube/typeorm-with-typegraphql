import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CreateNewProductArgs {
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  description: string;
}
