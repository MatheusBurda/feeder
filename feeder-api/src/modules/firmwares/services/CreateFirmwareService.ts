import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import ICreateFirmwareDto from "../dtos/ICreateFirmwareDto";
import Firmware from "../infra/typeorm/entities/Firmware";
import IFirmwaresRepository from "../repositories/IFirmwaresRepository";

@injectable()
export default class CreateFirmwareService {
  constructor(
    @inject('FirmwaresRepository')
    private firmwareRepository: IFirmwaresRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(firmware: ICreateFirmwareDto): Promise<Firmware> {
    // TODO: Create validation
    const userExists = !!await this.usersRepository.findById(firmware.ownerId);

    if (!userExists)
      throw new AppError(`User doesn't exists.`);

    return await this.firmwareRepository.create(firmware);
  }
}
