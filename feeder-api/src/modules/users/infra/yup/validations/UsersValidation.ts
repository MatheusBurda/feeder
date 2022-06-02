import ICreateUserDTO from '../../../../users/dtos/ICreateUserDTO';
import IUsersValidation from '../../../../users/validations/IUsersValidation';
import AppError from '../../../../../shared/errors/AppError';
import ValidationErrorResult from '../../../../../shared/errors/ValidationErrorResult';
import * as yup from 'yup';

export default class UserValidation implements IUsersValidation {
  private schema;

  constructor()
  {
    this.schema = yup.object().shape({
      email: yup.string().required().email(),
      username: yup.string().required().min(8).max(20)
      .matches(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/),
      password: yup.string().required(),
    });
  }
  
  async createUserValidation(user: ICreateUserDTO): Promise<ValidationErrorResult> {
    try {
      await this.schema.validate(user);
      return {
        succeeded: true,
        message: ''
      }
    } catch (err) {
      return {
        succeeded: false,
        message: (err as yup.ValidationError).message
      };
    }
  }

}