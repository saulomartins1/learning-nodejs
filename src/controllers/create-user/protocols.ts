import { IUser } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUser>>;
}

export interface ICreateUserParams {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUser>;
}
