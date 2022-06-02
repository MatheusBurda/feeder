import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import User from '../../../modules/users/infra/typeorm/entities/User';

import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import ICreateUserDto from '../dtos/ICreateUserDTO';
import IUsersValidation from '../validations/IUsersValidation';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersValidation')
    private usersValidation: IUsersValidation
  ) {}

  public async execute(userRequest: ICreateUserDto): Promise<User> {
    const result = await this.usersValidation.createUserValidation(userRequest);

    if (!result.succeeded)
      throw new AppError(result.message);

    const { email, username, password, ...rest } = userRequest;

    const checkUserExistsByEmail = await this.usersRepository.findByEmail(email);

    if (checkUserExistsByEmail)
      throw new AppError('Email address already used.');

    const checkUserExistsByUsername = await this.usersRepository.findByUsername(
      username
    );

    if (checkUserExistsByEmail)
      throw new AppError('Username already used.');

    const hashedPassword = await hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      password: hashedPassword,
      username,
      ...rest
    });

    return user;
  }
}
