import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1594004025272 implements MigrationInterface {
    name = 'InitDB1594004025272'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `base_entity` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `raw_material` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_a280e6bf273bfae9a726ca9703` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `raw_material_ratio` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, `ratio` int NOT NULL, `formulaId` int NOT NULL, `rawMaterialId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `formula` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, `density` int NOT NULL, `version` int NOT NULL, `age` int NOT NULL, `detergentId` int NULL, `ratioId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `detergent` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, `name` varchar(255) NOT NULL, `number` varchar(255) NOT NULL, UNIQUE INDEX `IDX_2f928f687d31d200d9ea0a5af3` (`name`, `number`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `raw_material_ratio` ADD CONSTRAINT `FK_fca4090bb98e0522e6a66880d15` FOREIGN KEY (`formulaId`) REFERENCES `formula`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `raw_material_ratio` ADD CONSTRAINT `FK_72d90c83ea432de3dfce7a7d7ba` FOREIGN KEY (`rawMaterialId`) REFERENCES `raw_material`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `formula` ADD CONSTRAINT `FK_e8f10ae8f8972945fd4f7869bbc` FOREIGN KEY (`detergentId`) REFERENCES `detergent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `formula` ADD CONSTRAINT `FK_13927d70d9444099b84ef9cfb5e` FOREIGN KEY (`ratioId`) REFERENCES `raw_material_ratio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `formula` DROP FOREIGN KEY `FK_13927d70d9444099b84ef9cfb5e`", undefined);
        await queryRunner.query("ALTER TABLE `formula` DROP FOREIGN KEY `FK_e8f10ae8f8972945fd4f7869bbc`", undefined);
        await queryRunner.query("ALTER TABLE `raw_material_ratio` DROP FOREIGN KEY `FK_72d90c83ea432de3dfce7a7d7ba`", undefined);
        await queryRunner.query("ALTER TABLE `raw_material_ratio` DROP FOREIGN KEY `FK_fca4090bb98e0522e6a66880d15`", undefined);
        await queryRunner.query("DROP INDEX `IDX_2f928f687d31d200d9ea0a5af3` ON `detergent`", undefined);
        await queryRunner.query("DROP TABLE `detergent`", undefined);
        await queryRunner.query("DROP TABLE `formula`", undefined);
        await queryRunner.query("DROP TABLE `raw_material_ratio`", undefined);
        await queryRunner.query("DROP INDEX `IDX_a280e6bf273bfae9a726ca9703` ON `raw_material`", undefined);
        await queryRunner.query("DROP TABLE `raw_material`", undefined);
        await queryRunner.query("DROP TABLE `base_entity`", undefined);
    }

}
