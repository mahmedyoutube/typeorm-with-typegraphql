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
import { CreateNewUserArgs } from "./types";
import { Product } from "../../../database/schema/Product";

@Resolver(() => User)
export class UserResolver {
  @FieldResolver(() => [Product], { nullable: true })
  async products(@Root() user: User) {
    return [];
  }

  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    return [];
  }

  @Mutation(() => User)
  async createUser(
    @Args()
    { firstName, lastName, email, password, phoneNumber }: CreateNewUserArgs
  ) {
    console.log(
      "firstName ",
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );
  }
}
