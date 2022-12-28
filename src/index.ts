import express from "express";
import { db } from "./database/db";
import { createNewUserRecord, insertNewUser } from "./database/CRUD/create";
import { updateRecord } from "./database/CRUD/update";
import { deleteRecord } from "./database/CRUD/delete";
import { readRecord } from "./database/CRUD/read";

const app = express();

db.connect();
app.use(express.json());

// setTimeout(() => {
//   createNewUserRecord().then(() => {
//     readRecord();
//   });
// }, 2000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `server is listening on the port ${PORT} graphql: http://localhost:${PORT}/graphql`
  );
});
