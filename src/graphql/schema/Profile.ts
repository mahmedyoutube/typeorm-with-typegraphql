import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @Column()
  @Field()
  profilePic: string;

  @Column()
  @Field()
  aboutMe: string;

  @OneToOne(() => User, (user) => user.profile)
  @Field(() => User)
  user: User;
}
