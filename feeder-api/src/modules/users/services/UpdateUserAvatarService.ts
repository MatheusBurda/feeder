import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import CloudFile from '@modules/cloudFiles/infra/typeorm/entities/CloudFile';
import ICloudFilesRepository from '@modules/cloudFiles/repositories/ICloudFilesRepositories';

interface IRequest {
  userId: string;
  key: string;
  path: string;
  size: number;
  mimeType: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CloudFilesRepository')
    private cloudFilesRepository: ICloudFilesRepository,
  ) {}

  public async execute({
    userId,
    key,
    path,
    size,
    mimeType
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    const file = await this.cloudFilesRepository.create({
      key: key,
      url: path,
      size,
      mimeType,
    });

    user.avatar = file;

    this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
