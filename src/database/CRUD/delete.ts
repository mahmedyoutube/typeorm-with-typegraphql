import { User } from "../schema/User";

export const deleteRecord = async () => {
  await User.delete({ id: 3 });
};
