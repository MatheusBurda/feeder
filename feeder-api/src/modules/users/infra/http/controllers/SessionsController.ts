import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

interface IResponseUser {
  id: string;
  email: string;
}

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, username, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      username,
      password,
    });

    const responseUser: IResponseUser = {
      id: user.id,
      email: user.email,
    };

    return response.json({ responseUser, token });
  }
}
