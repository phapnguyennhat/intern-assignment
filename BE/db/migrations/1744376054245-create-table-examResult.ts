import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableExamResult1744376054245 implements MigrationInterface {
    name = 'CreateTableExamResult1744376054245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exam_result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "sbd" character varying NOT NULL, "toan" double precision NOT NULL, "ngu_van" double precision NOT NULL, "ngoai_ngu" double precision NOT NULL, "vat_li" double precision NOT NULL, "hoa_hoc" double precision NOT NULL, "sinh_hoc" double precision NOT NULL, "lich_su" double precision NOT NULL, "dia_li" double precision NOT NULL, "gdcd" double precision NOT NULL, "ma_ngoai_ngu" character varying NOT NULL, CONSTRAINT "PK_9c05af0457cef1ec4ee5f074df7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exam_result"`);
    }

}
