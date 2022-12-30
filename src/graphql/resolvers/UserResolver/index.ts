import {
  Arg,
  Args,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { CreateNewUserArgs } from "./types";
import { Product } from "../../schema/Product";
import { User } from "../../schema/User";
import { encodePassword, generateToken } from "../../../utils/helpers";
import { Profile } from "../../schema/Profile";

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    const allUsers = await User.find({
      relations: { products: true, profile: true },
    });
    return allUsers;
  }

  @Mutation(() => User)
  async createUser(
    @Args()
    { firstName, lastName, email, password, phoneNumber }: CreateNewUserArgs
  ) {
    // create profile record with user with default value, so later user can update his record
    const profile = Profile.create({
      profilePic: "..", // default value
      aboutMe: "..", // default value
    });

    const user = User.create({
      firstName,
      lastName,
      email,
      password: await encodePassword(password),
      phoneNumber,
    });

    await user.save();

    await profile.save();

    // update user record again with profile record
    user.profile = profile;
    await user.save();

    const token = await generateToken({ email: user.email, id: user.id });

    return { ...user, token };
  }
}
