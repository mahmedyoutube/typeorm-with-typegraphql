import { Query, Resolver } from "type-graphql";
import { UserSchema  as User} from "../../schema/UserSchema";

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    return [];
  }
}
