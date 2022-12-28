import { User } from "../schema/User";

export const readRecord = async () => {
  const user = await User.findOneBy({ id: 4 });
  console.log("user is ", user);
};
