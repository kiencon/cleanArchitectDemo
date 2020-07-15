import { EntityRepository } from 'typeorm';
import Repository from './Repository';
import { Detergent } from '../../domain/entity';

@EntityRepository(Detergent)
export default class DetergentRepository extends Repository<Detergent> {}