import { IUser } from "../../models/user";

export interface ICreateUserParams {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUser>;
}
