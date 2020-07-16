import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'

import User from './User'
import Settings from './Settings';

@Entity()
export default class Profile {

  @Column({
    readonly: true,
    unique: true,
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(type => User, { nullable: false })
  @JoinColumn()
  user: User;

  @OneToOne(type => Settings, { nullable: false })
  @JoinColumn()
  settings: Settings;

  @Column()
  fullName: string;
}
