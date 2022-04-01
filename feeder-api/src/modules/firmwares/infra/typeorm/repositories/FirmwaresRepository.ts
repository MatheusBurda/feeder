import ICreateFirmwareDto from "@modules/firmwares/dtos/ICreateFirmwareDto";
import IFirmwaresRepository from "@modules/firmwares/repositories/IFirmwaresRepository";
import { Repository } from "typeorm";
import Firmware from "../entities/Firmware";

export default class FirmwaresRepository implements IFirmwaresRepository {
  private ormRepository: Repository<Firmware>;
  
  constructor() {
    this.ormRepository = new Repository();
  }
  
  public async create(firmware: ICreateFirmwareDto): Promise<Firmware> {
    return this.ormRepository.create({ ...firmware });
  }

}