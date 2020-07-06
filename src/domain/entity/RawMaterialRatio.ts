import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import BaseEntity from "./BaseEntity";
import Formula from "./Formula";
import RawMaterial from "./RawMaterial";

@Entity()
export default class RawMaterialRatio extends BaseEntity {
	@Column()
	ratio: number;

  @Column()
  formulaId: number;

  @Column()
  rawMaterialId: number;

  @ManyToOne(() => Formula, formula => formula.ratio)
  @JoinColumn({ name: 'formulaId' })
  formula: Formula;

  @ManyToOne(() => RawMaterial)
  @JoinColumn({ name: 'rawMaterialId' })
  rawMaterial: RawMaterial;
}
