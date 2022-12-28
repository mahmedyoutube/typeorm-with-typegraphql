import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  productPic: string;

  @Column()
  productDescription: string;

  @Column({ type: "numeric" })
  price: number;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: "user_id" })
  user: User;
}
