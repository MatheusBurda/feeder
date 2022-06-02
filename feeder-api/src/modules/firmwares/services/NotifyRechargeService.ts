import IUsersRepository from "../../../modules/users/repositories/IUsersRepository";
import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IFirmwaresRepository from "../repositories/IFirmwaresRepository";

@injectable()
class NotifyRechargeService {
  constructor(
    @inject('FirmwaresRepository')
    private firmwareRepository: IFirmwaresRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(firmwareId: string, userId: string, value: boolean = true): Promise<boolean> {
    const userExists = !!await this.usersRepository.findById(userId);

    if (!userExists)
      throw new AppError(`User doesn't exists.`);

    const firmware = await this.firmwareRepository.findById(firmwareId);

    if (!firmware)
      throw new AppError(`Firmwares doesn't exists.`);

    firmware.recharge = value;

    return firmware.recharge;
  }
}

export default NotifyRechargeService;
