import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `server is listening on the port ${PORT} graphql: http://localhost:${PORT}/graphql`
  );
});
