import IActivationTimeDto from "./IActivationTimeDto";

export default interface ICreateFirmwareDto {
  ownerId: string;
  minHeight: number;
  doses: number;
  activationTimes: IActivationTimeDto[];
}