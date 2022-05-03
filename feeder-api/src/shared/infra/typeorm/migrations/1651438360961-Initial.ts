import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1651438360961 implements MigrationInterface {
    name = 'Initial1651438360961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "firmwares" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "minHeight" double precision NOT NULL, "doses" integer NOT NULL, "ownerId" uuid, CONSTRAINT "PK_c18df882af1ac7cc3b29993c6a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."actiovationTimes_weekday_enum" AS ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')`);
        await queryRunner.query(`CREATE TABLE "actiovationTimes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "weekDay" "public"."actiovationTimes_weekday_enum", "hour" integer NOT NULL, "minutes" integer NOT NULL, "firmwareId" uuid, CONSTRAINT "PK_a9086aaee121e396baeef8e9f98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "firmwares" ADD CONSTRAINT "FK_205b3d7759f31b8677d9b5c6e26" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "actiovationTimes" ADD CONSTRAINT "FK_134e25061658f859fbce5da5b61" FOREIGN KEY ("firmwareId") REFERENCES "firmwares"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actiovationTimes" DROP CONSTRAINT "FK_134e25061658f859fbce5da5b61"`);
        await queryRunner.query(`ALTER TABLE "firmwares" DROP CONSTRAINT "FK_205b3d7759f31b8677d9b5c6e26"`);
        await queryRunner.query(`DROP TABLE "actiovationTimes"`);
        await queryRunner.query(`DROP TYPE "public"."actiovationTimes_weekday_enum"`);
        await queryRunner.query(`DROP TABLE "firmwares"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
