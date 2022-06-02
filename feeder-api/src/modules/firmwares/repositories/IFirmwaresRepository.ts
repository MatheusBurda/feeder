import ICreateFirmwareDto from "../dtos/ICreateFirmwareDto";
import ICreateFirmwareEntityDto from "../dtos/ICreateFIrmwareEnyityDto";
import IUpdateFirmwareDto from "../dtos/IUpdateFirmwareDto";
import Firmware from "../infra/typeorm/entities/Firmware";

export default interface IFirmwaresRepository {
  create(firmware: ICreateFirmwareEntityDto): Promise<Firmware>;
  findById(id: string): Promise<Firmware | null>;
  listByUserId(userId: string): Promise<Firmware[]>;
  update(firmware: IUpdateFirmwareDto) : Promise<Firmware>;
}
