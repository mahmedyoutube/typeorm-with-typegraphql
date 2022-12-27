import { UserSchema as User } from "./UserSchema";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProductSchema {
  @Field()
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  productPic: string;

  @Field()
  productDescription: string;

  @Field()
  price: number;

  @Field(() => User)
  user: User;
}
