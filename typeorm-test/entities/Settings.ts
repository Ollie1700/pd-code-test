import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Settings {
  @PrimaryGeneratedColumn("uuid")
  id: string;

}
