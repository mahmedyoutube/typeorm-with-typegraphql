import { DataSource, DeepPartial, EntityTarget, ObjectLiteral } from "typeorm";
import { config } from "../config";
import { User } from "../graphql/schema/User";
import { Product } from "../graphql/schema/Product";
import { Profile } from "../graphql/schema/Profile";
import { Cart } from "../graphql/schema/Cart";

class SetupConnection {
  private _appDataSource: DataSource;
  private _entities = [User, Product, Profile, Cart];

  get entities() {
    return this._entities;
  }

  async connect() {
    this._appDataSource = new DataSource({
      type: config.dbType,
      host: config.dbHost!,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
      entities: this.entities,
      synchronize: true,
    });

    try {
      await this._appDataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }

  get dataSource() {
    return this._appDataSource;
  }

  async save(
    entity: EntityTarget<ObjectLiteral>,
    record: DeepPartial<ObjectLiteral>
  ) {
    const userRepository = db.dataSource.getRepository(entity);
    await userRepository.save(record);
  }
}

export const db = new SetupConnection();
