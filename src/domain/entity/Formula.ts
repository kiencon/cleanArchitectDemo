import { Entity, Column, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Detergent from "./Detergent";
import RawMaterialRatio from "./RawMaterialRatio";

@Entity()
export default class Formula extends BaseEntity {
	@Column()
	density: number;

	@Column()
	version: number;
  
  @ManyToOne(() => Detergent, detergent => detergent.formulas)
  detergent: Detergent;

  @ManyToOne(() => RawMaterialRatio, ratio => ratio.formula)
  ratio: RawMaterialRatio;
}
