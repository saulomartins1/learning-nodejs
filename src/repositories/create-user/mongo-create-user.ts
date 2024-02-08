import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { MongoClientDB } from "../../database/mongo";
import { IUser } from "../../models/user";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const { insertedId } = await MongoClientDB.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClientDB.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("Fail: User not created");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
