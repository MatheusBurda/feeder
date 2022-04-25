import ICreateFirmwareDto from "../dtos/ICreateFirmwareDto";
import IUpdateFirmwareDto from "../dtos/IUpdateFirmwareDto";
import Firmware from "../infra/typeorm/entities/Firmware";

export default interface IFirmwaresRepository {
  create(firmware: ICreateFirmwareDto): Promise<Firmware>;
  findById(id: string): Promise<Firmware | undefined>;
  listByUserId(userId: string): Promise<Firmware[]>;
  update(firmware: IUpdateFirmwareDto) : Promise<Firmware>;
}
