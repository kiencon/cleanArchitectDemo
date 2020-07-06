import "reflect-metadata";
import { createConnection } from "typeorm";
import * as entities from "./entity";

const getEntities = () : string[] => {
    return Object.keys(entities);
}

const migrate = async () => createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "demo",
    synchronize: false,
    migrationsRun: false,
    migrations: ["./migration/*.ts"],
    logging: false,
    entities: getEntities(),
  }).then(async connection => {
    return connection.runMigrations().then(res => res);
}).catch(error => console.log(error));

migrate().then(res => console.log(res));

export default migrate;