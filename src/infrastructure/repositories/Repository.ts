import * as TypeORM from "typeorm";
import IEntity from "../../domain/entity/IEntity"
import IRepository from "./interfaces/IRepository";

abstract class Repository<T extends IEntity> extends TypeORM.Repository<T> implements IRepository {}

export default Repository;
