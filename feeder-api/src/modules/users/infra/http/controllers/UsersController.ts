import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';

interface IResponseUser {
  email: string;
}

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userToCreate: ICreateUserDto = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(userToCreate);

    const responseUser: IResponseUser = {
      email: user.email,
    };

    return response.json(responseUser);
  }
}
