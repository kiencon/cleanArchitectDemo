import { Entity, Column, Unique } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
@Unique(['name'])
export default class RawMaterial extends BaseEntity {
  @Column()
  name: string;
}
