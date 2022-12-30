import { NonEmptyArray, buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { ProductResolver } from "./resolvers/ProductResolver";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { authorization } from "./middlewares/authorization";
import { CartResolver } from "./resolvers/CartResolver";
import { ProfileResolver } from "./resolvers/Profile";

class GraphQl {
  private _schema: GraphQLSchema;

  private resolvers(): NonEmptyArray<Function> | NonEmptyArray<string> {
    return [UserResolver, ProductResolver, CartResolver, ProfileResolver];
  }

  async buildGraphQLSchema() {
    this._schema = await buildSchema({
      resolvers: this.resolvers(),
      validate: { forbidUnknownValues: false },
      nullableByDefault: false, // by default all fields are not optional
      authChecker: authorization,
    });
  }

  async startApolloServer(app: Express) {
    await this.buildGraphQLSchema();
    const apolloServer = new ApolloServer({
      schema: this.schema,
      context: ({ req }) => {
        return {
          req,
        };
      },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
  }

  get schema() {
    return this._schema!;
  }
}

const graphQl = new GraphQl();

export default graphQl;
