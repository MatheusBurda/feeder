import ICreateFirmwareDto from "../dtos/ICreateFirmwareDto";
import Firmware from "../infra/typeorm/entities/Firmware";

export default interface IFirmwaresRepository {
  create(firmware: ICreateFirmwareDto): Promise<Firmware>;
}