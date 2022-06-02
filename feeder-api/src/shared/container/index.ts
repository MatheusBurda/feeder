import { container } from 'tsyringe';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersValidation from '../../modules/users/validations/IUsersValidation';
import UsersValidation from '../../modules/users/infra/yup/validations/UsersValidation';
import IFirmwaresRepository from '../../modules/firmwares/repositories/IFirmwaresRepository';
import FirmwaresRepository from '../../modules/firmwares/infra/typeorm/repositories/FirmwaresRepository';

container.register<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.register<IUsersValidation>(
  'UsersValidation',
  UsersValidation
);

container.register<IFirmwaresRepository>(
  'FirmwaresRepository',
  FirmwaresRepository
);
