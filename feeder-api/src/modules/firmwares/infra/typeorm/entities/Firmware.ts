import User from "@modules/users/infra/typeorm/entities/User";
import BaseEntity from "@shared/infra/typeorm/BaseEntity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import ActivationTime from "./ActivationTime";

@Entity('firmwares')
export default class Firmware extends BaseEntity {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @Column({type: 'float', })
  minHeight: number;

  @Column({ type: 'int' })
  doses: number;

  @OneToMany(() => ActivationTime, time => time.firmware, {
    cascade: ['insert', 'remove', 'update']
  })
  activationTimes: ActivationTime[];

  @Column({ type: 'bool', default: false })
  recharge: boolean;
}
