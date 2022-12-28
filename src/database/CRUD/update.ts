import { User } from "../schema/User";

export const updateRecord = async () => {
  await User.update({ id: 3 }, { firstName: "Updated Name" });
};
