import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'

import Chat from './Chat';
import Profile from './Profile';
import Attachment from './Attachment';

@Entity()
export default class Message {

  @Column({
    readonly: true,
    unique: true,
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(type => Chat, { nullable: false })
  @JoinColumn()
  chat: Chat;

  @OneToOne(type => Profile, { nullable: false })
  @JoinColumn()
  sender: Profile;

  @OneToOne(type => Attachment)
  @JoinColumn()
  attachment: Attachment;

}
