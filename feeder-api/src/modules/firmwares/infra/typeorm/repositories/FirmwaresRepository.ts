import ICreateFirmwareDto from "@modules/firmwares/dtos/ICreateFirmwareDto";
import IUpdateFirmwareDto from "@modules/firmwares/dtos/IUpdateFirmwareDto";
import IFirmwaresRepository from "@modules/firmwares/repositories/IFirmwaresRepository";
import { Repository } from "typeorm";
import Firmware from "../entities/Firmware";

export default class FirmwaresRepository implements IFirmwaresRepository {
  private ormRepository: Repository<Firmware>;

  constructor() {
    this.ormRepository = new Repository();
  }

  public async findById(id: string): Promise<Firmware | undefined> {
    return await this.ormRepository.findOne({
      where: {
        id: id
      }
    });
  }

  public async listByUserId(userId: string): Promise<Firmware[]> {
    return await this.ormRepository.find({
      where: {
        owner: userId
      }
    });
  }

  public async update(firmware: IUpdateFirmwareDto): Promise<Firmware> {
    return await this.ormRepository.save({
      id: firmware.id,
      doses: firmware.doses,
      minHeight: firmware.minHeight,
      activationTimes: [...firmware.activationTimes],
    });
  }

  public async create(firmware: ICreateFirmwareDto): Promise<Firmware> {
    return this.ormRepository.create({ ...firmware });
  }

}
