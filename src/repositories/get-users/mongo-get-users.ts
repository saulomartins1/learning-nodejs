import { MongoClient } from "mongodb";
import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClientDB } from "../../database/mongo";
import { IUser } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const users = await MongoClientDB.db
      .collection<Omit<IUser, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
