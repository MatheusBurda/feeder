import ValidationErrorResult from "@shared/errors/ValidationErrorResult";
import ICreateUserDto from "../dtos/ICreateUserDTO";

export default interface IUsersValidation {
  createUserValidation(user: ICreateUserDto): Promise<ValidationErrorResult>;
}