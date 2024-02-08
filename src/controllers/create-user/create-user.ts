import validator from "validator";
import { IUser } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";
import {
  ICreateUserController,
  ICreateUserParams,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly CreateUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      const requiredFields = ["name", "surname", "email", "password"];
      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required!`,
          };
        }
      }

      const emailValid = validator.isEmail(httpRequest.body?.email as string);
      if (!emailValid) {
        return {
          statusCode: 400,
          body: "Email is invalid!",
        };
      }

      const user = await this.CreateUserRepository.createUser(
        httpRequest.body!
      );
      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
