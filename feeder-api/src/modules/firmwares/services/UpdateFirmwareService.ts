import IUsersRepository from "../../../modules/users/repositories/IUsersRepository";
import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IUpdateFirmwareDto from "../dtos/IUpdateFirmwareDto";
import Firmware from "../infra/typeorm/entities/Firmware";
import IFirmwaresRepository from "../repositories/IFirmwaresRepository";

@injectable()
class UpdateFirmwareService {
  constructor(
    @inject('FirmwaresRepository')
    private firmwareRepository: IFirmwaresRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(firmware: IUpdateFirmwareDto): Promise<Firmware> {
    // TODO: Validations

    const userExists = !!await this.usersRepository.findById(firmware.ownerId);

    if (!userExists)
      throw new AppError(`User doesn't exists.`);

    const existsFirmware = !!await this.firmwareRepository.findById(firmware.id);

    if (!existsFirmware)
      throw new AppError(`Firmware doesn't exists.`);

    return await this.firmwareRepository.update(firmware);
  }
}

export default UpdateFirmwareService;
