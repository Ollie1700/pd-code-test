import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm'

import Message from './Message';
import Profile from './Profile';

@Entity()
export default class Chat {

  @Column({
    readonly: true,
    unique: true,
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(type => Profile)
  @JoinTable()
  participants: Profile[];

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];
}
