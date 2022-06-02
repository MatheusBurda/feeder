
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import BaseEntity from '../../../../../shared/infra/typeorm/BaseEntity';

@Entity('users')
class User extends BaseEntity {
  @Column('varchar')
  username: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string
}

export default User;
