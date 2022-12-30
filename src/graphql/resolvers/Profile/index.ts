import { Authorized, Ctx, Query, Resolver } from "type-graphql";

import { User } from "../../schema/User";
import { Profile } from "../../schema/Profile";
import { IGraphQLCotext } from "../../../global/types";

@Resolver(() => Profile)
export class ProfileResolver {
  @Authorized()
  @Query(() => Profile, { nullable: true })
  async profile(
    @Ctx() { currentUser }: IGraphQLCotext
  ): Promise<Profile | null> {
    const user = await User.findOne({
      where: { id: currentUser!.id },
      relations: { profile: true },
    });

    return user!.profile;
  }
}
