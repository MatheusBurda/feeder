import WeekDay from "../enums/WeekDay";

export default interface IActivationTimeDto {
  weekDay?: WeekDay;
  hour: number;
  minutes: number;
}