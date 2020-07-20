// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import * as Entities from "domain";
// const getEntities = () : any[] => {
//   return Object.values(Entities);
// }

// const migrate = async () => createConnection({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "",
//   database: "demo",
//   synchronize: false,
//   migrationsRun: false,
//   migrations: ["./migration/*.ts"],
//   logging: false,
//   entities: getEntities(),
// }).then(async connection => {
//   return connection.runMigrations().then(res => res);
// }).catch(error => console.log(error));


// export default migrate;

// import UnitOfWork from '../infrastructure/unitOfWork/UnitOfWork';

// const unw = new UnitOfWork({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "",
//   database: "demo",
//   synchronize: false,
//   migrationsRun: false,
//   migrations: ["./migration/*.ts"],
//   logging: false,
//   entities: getEntities(),
// });

// const demo = async () => {
//   await unw.start();

//   const detergentRepo = unw.getRepository(Entities.Detergent);
//   const rawMaterialRepo = unw.getRepository(Entities.RawMaterial);

//   const work = async () => {
//     await detergentRepo.save({
//       name: "D007",
//       number: "D007"
//     });
//     await rawMaterialRepo.save({
//       name: "RM007"
//     });
//   }

//   await unw.complete(work);
// }

// demo().then(res => console.log(res)).catch(err => console.log(err));
