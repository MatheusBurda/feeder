import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import Firmware from "../infra/typeorm/entities/Firmware";
import IFirmwaresRepository from "../repositories/IFirmwaresRepository";

@injectable()
class ListUserFirmwaresService {
  constructor(
    @inject('FirmwaresRepository')
    private firmwareRepository: IFirmwaresRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(userId: string): Promise<Firmware[]> {
    const userExists = await this.usersRepository.findById(userId);

    if (!userExists)
      throw new AppError(`User doesn't exists.`);

    const firmwares = await this.firmwareRepository.listByUserId(userId);

    if (!firmwares)
      throw new AppError(`Firmwares doesn't exists.`);

    return firmwares;
  }
}

export default ListUserFirmwaresService;
