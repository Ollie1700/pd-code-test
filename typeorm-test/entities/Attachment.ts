import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Attachment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

}
