import { encodePassword } from "../../utils/helpers";
import { User } from "../schema/User";

const createNewUserRecord = async () => {
  const user = new User();
  user.firstName = "M Ahmed";
  user.lastName = "Mushtaq";
  user.email = "email@gmail.com";
  user.password = await encodePassword("123@12");
  await user.save();
};

// another way to insert record
const insertNewUser = async () => {
  const user = User.create({
    firstName: "M Ahmed",
    lastName: "Mushtaq",
    email: "shine@gmail.com",
    password: await encodePassword("234234"),
  });

  await user.save();
};

export { createNewUserRecord, insertNewUser };
