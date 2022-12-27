import express from "express";
import { db } from "./database/db";
import graphQl from "./graphql";

const app = express();

db.connect();
app.use(express.json());

graphQl.startApolloServer(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `server is listening on the port ${PORT} graphql: http://localhost:${PORT}/graphql`
  );
});
