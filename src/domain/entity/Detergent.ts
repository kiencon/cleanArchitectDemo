import { Entity, Column, OneToMany, Unique } from "typeorm";
import BaseEntity from "./BaseEntity";
import Formula from "./Formula";

@Entity()
@Unique(['name', 'number'])
export default class Detergent extends BaseEntity {
	@Column()
	name: string;

	@Column()
	number: string;

	@OneToMany(() => Formula, formula => formula.detergent)
  formulas: Formula[];
}
