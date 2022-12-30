import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Field, ObjectType } from "type-graphql";
import { Cart } from "./Cart";

@Entity()
@ObjectType()
export class Product extends BaseEntity {
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
  pic: string;

  @Column()
  @Field()
  description: string;

  @Column({ type: "numeric" })
  @Field()
  price: number;

  @ManyToOne(() => User, (user) => user.products)
  // @JoinColumn({ name: "user_id" }) // optional if user to change the name of the column
  @Field(() => User)
  user: User;

  @Field(() => [Cart], { nullable: true })
  cart: Cart[];
}
