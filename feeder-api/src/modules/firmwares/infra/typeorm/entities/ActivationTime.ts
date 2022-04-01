import WeekDay from "@modules/firmwares/enums/WeekDay";
import BaseEntity from "@shared/infra/typeorm/BaseEntity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Firmware from "./Firmware";

@Entity('actiovationTimes')
export default class ActivationTime extends BaseEntity {
  @ManyToOne(() => Firmware, firmware => firmware.activationTimes)
  @JoinColumn({ name: 'firmwareId' })
  firmware: Firmware;

  @Column({
    type: "enum",
    enum: WeekDay,
    nullable: true,
    default: null
  })
  weekDay?: WeekDay;

  @Column({ type: 'int' })
  hour: number;

  @Column({ type: 'int' })
  minutes: number;
}