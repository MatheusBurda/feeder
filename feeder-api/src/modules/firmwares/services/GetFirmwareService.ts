import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import Firmware from "../infra/typeorm/entities/Firmware";
import IFirmwaresRepository from "../repositories/IFirmwaresRepository";

@injectable()
class GetFirmwareService {
  constructor(
    @inject('FirmwaresRepository')
    private firmwareRepository: IFirmwaresRepository,
  ) {}

  public async execute(id: string): Promise<Firmware> {
    const firmware = await this.firmwareRepository.findById(id);

    if (!firmware)
      throw new AppError(`Firmware doesn't exists.`);

    return firmware;
  }
}

export default GetFirmwareService;
