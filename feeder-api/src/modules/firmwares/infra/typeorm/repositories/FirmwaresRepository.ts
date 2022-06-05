import ICreateFirmwareDto from "@modules/firmwares/dtos/ICreateFirmwareDto";
import ICreateFirmwareEntityDto from "@modules/firmwares/dtos/ICreateFIrmwareEnyityDto";
import IUpdateFirmwareDto from "@modules/firmwares/dtos/IUpdateFirmwareDto";
import IFirmwaresRepository from "@modules/firmwares/repositories/IFirmwaresRepository";
import { getRepository, Repository } from "typeorm";
import ActivationTime from "../entities/ActivationTime";
import Firmware from "../entities/Firmware";

export default class FirmwaresRepository implements IFirmwaresRepository {
  private ormRepository: Repository<Firmware>;
  private activationTimesRepository: Repository<ActivationTime>;

  constructor() {
    this.ormRepository = getRepository(Firmware);
    this.activationTimesRepository = getRepository(ActivationTime);
  }

  public async findById(id: string): Promise<Firmware | undefined> {
    return await this.ormRepository.findOne({
      where: {
        id: id
      },
      relations: ['activationTimes']
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
    const activationTimes = await this.activationTimesRepository.find({
      where: {
        firmware: firmware.id
      }
    });

    await this.activationTimesRepository.remove(activationTimes || []);

    return await this.ormRepository.save({
      id: firmware.id,
      doses: firmware.doses,
      minHeight: firmware.minHeight,
      activationTimes: [...firmware.activationTimes],
      recharge: !!firmware.recharge
    });
  }

  public async create(firmware: ICreateFirmwareEntityDto): Promise<Firmware> {
    const newFirmware = this.ormRepository.create({ ...firmware });
    return await this.ormRepository.save(newFirmware);
  }

}
