import { JoinTable, ManyToMany } from "typeorm";
import { Product } from "./Product";
import { Base } from "./Base";

export class Cart extends Base {
  @ManyToMany(() => Product)
  @JoinTable()
  product: Product[];
}
