import express from "express";
import dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClientDB } from "./database/mongo";

const main = async () => {
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 4000;

  await MongoClientDB.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersControllers = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersControllers.handle();

    res.send(body).status(statusCode);
  });

  app.listen(port, () => console.log(`Running on port ${port}`));
};

main();
