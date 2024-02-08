import express from "express";
import dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClientDB } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";

const main = async () => {
  dotenv.config();

  const app = express();
  app.use(express.json());
  const port = process.env.PORT || 4000;

  await MongoClientDB.connect();

  //
  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersControllers = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersControllers.handle();

    res.status(statusCode).send(body);
  });

  //
  app.post("/users", async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();
    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });
    res.status(statusCode).send(body);
  });

  app.listen(port, () => console.log(`Running on port ${port}`));
};

main();
