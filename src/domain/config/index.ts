import * as entities from "../entity";

const config = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "demo",
  synchronize: false,
  migrationsRun: false,
  migrations: ["../migration/*.ts"],
  logging: !(process.env.DB_AURORA_LOGGING === undefined),
  entities,
};

const getConfig = () => {
  return config;
}

export default getConfig;