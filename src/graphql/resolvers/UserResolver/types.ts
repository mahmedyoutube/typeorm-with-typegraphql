import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class SignUpUserArgs {
  @Field({ nullable: false })
  firstName: string;
  @Field({ nullable: false })
  lastName: string;

  @Field((type) => String, { nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: true })
  phoneNumber?: string;
}
