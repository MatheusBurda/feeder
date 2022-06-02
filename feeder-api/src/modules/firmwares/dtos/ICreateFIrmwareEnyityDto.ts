import User from "../../users/infra/typeorm/entities/User";
import IActivationTimeDto from "./IActivationTimeDto";

export default interface ICreateFirmwareEntityDto {
  owner: User;
  minHeight: number;
  doses: number;
  activationTimes: IActivationTimeDto[];
}
