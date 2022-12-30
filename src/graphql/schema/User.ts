import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Profile } from "./Profile";
import { Product } from "./Product";
import { Field, ObjectType } from "type-graphql";
import { BaseEntity } from "typeorm";
@Entity()
@ObjectType()
export class User extends BaseEntity {
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
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true }) // it's not a column
  token?: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  @Field(() => Profile)
  profile: Profile;

  @OneToMany(() => Product, (product) => product.user)
  @Field(() => [Product], { nullable: true })
  products: Product[];
}
