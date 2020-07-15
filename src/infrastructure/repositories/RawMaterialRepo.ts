import { EntityRepository } from 'typeorm';
import Repository from './Repository';
import { RawMaterial } from '../../domain/entity';

@EntityRepository(RawMaterial)
export default class RawMaterialRepository extends Repository<RawMaterial> {}
