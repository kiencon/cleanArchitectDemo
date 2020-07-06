import IEntity from "./IEntity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default abstract class BaseEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
}
