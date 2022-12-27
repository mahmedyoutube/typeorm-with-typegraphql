import { Field, ObjectType } from "type-graphql";
import { ProductSchema as Product } from "./ProductSchema";

@ObjectType()
export class UserSchema {
  @Field()
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phoneNumber?: string;

  @Field((type) => [Product], { nullable: true })
  products?: Product[];
}
