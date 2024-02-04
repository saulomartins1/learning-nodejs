import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { IUser } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    return [
      {
        name: "Saulo",
        surname: "Martins",
        email: "saulo@email.com",
        password: "123",
      },
    ];
  }
}
