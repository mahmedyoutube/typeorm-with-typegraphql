import { AuthChecker } from "type-graphql";
import { validateToken } from "../../utils/helpers";
import { Request } from "express";
import { db } from "../../database/db";
import { User } from "../schema/User";
import { IGraphQLCotext } from "../../global/types";

type IRolesType = "admin" | "user";

export const authorization: AuthChecker<IGraphQLCotext, IRolesType[]> = async (
  { root, args, context, info },
  roles
) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  const token = (context.req.headers as any).authorization!;

  const user = token ? await validateToken(token) : false;

  if (user) {
    // check is user present in db so we can return false also if user deleted from the db
    const userPayload = await User.findOneBy({ id: user.id });

    if (!userPayload) return false;

    context.currentUser = userPayload;
  }

  return !!user; // or false if access is denied
};
