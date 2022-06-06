import IActivationTimeDto from "./IActivationTimeDto";

export default interface IUpdateFirmwareDto {
  id: string;
  ownerId: string;
  minHeight: number;
  doses: number;
  activationTimes: IActivationTimeDto[];
  recharge: boolean;
}
