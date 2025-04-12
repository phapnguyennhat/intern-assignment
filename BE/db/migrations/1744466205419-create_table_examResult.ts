import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableExamResult1744466205419 implements MigrationInterface {
    name = 'CreateTableExamResult1744466205419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "UQ_89111c7168d73904483de9db8e0" UNIQUE ("sbd")`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "toan"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "toan" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ngu_van"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ngu_van" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ngoai_ngu"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ngoai_ngu" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "vat_li"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "vat_li" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "hoa_hoc"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "hoa_hoc" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "sinh_hoc"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "sinh_hoc" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "lich_su"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "lich_su" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "dia_li"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "dia_li" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "gdcd"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "gdcd" numeric(4,2)`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ma_ngoai_ngu"`);
        await queryRunner.query(`CREATE TYPE "public"."exam_result_ma_ngoai_ngu_enum" AS ENUM('N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7')`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ma_ngoai_ngu" "public"."exam_result_ma_ngoai_ngu_enum"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_fe857e0f929a3691e1eb353bf3" CHECK (gdcd >= 0 AND gdcd <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_bf6860a9649f4d4c88576e0ded" CHECK (dia_li >= 0 AND dia_li <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_327d2b2d1ac2da31804749e197" CHECK (lich_su >= 0 AND lich_su <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_d5e7d3454518c38bceeab965cb" CHECK (sinh_hoc >= 0 AND sinh_hoc <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_2246b54ce405eb8af716f94d3e" CHECK (hoa_hoc >= 0 AND hoa_hoc <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_c50dc33cda55bef385b28b60b6" CHECK (vat_li >= 0 AND vat_li <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_8d8d10e7304c07c5e08637645a" CHECK (ngu_van >= 0 AND ngu_van <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_461d665c1cbf278897de651d7a" CHECK (toan >= 0 AND toan <= 10)`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD CONSTRAINT "CHK_0a33ed3283631598e53ab680ef" CHECK (ngoai_ngu >= 0 AND ngoai_ngu <= 10)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_0a33ed3283631598e53ab680ef"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_461d665c1cbf278897de651d7a"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_8d8d10e7304c07c5e08637645a"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_c50dc33cda55bef385b28b60b6"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_2246b54ce405eb8af716f94d3e"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_d5e7d3454518c38bceeab965cb"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_327d2b2d1ac2da31804749e197"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_bf6860a9649f4d4c88576e0ded"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "CHK_fe857e0f929a3691e1eb353bf3"`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ma_ngoai_ngu"`);
        await queryRunner.query(`DROP TYPE "public"."exam_result_ma_ngoai_ngu_enum"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ma_ngoai_ngu" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "gdcd"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "gdcd" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "dia_li"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "dia_li" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "lich_su"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "lich_su" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "sinh_hoc"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "sinh_hoc" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "hoa_hoc"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "hoa_hoc" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "vat_li"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "vat_li" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ngoai_ngu"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ngoai_ngu" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "ngu_van"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "ngu_van" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP COLUMN "toan"`);
        await queryRunner.query(`ALTER TABLE "exam_result" ADD "toan" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exam_result" DROP CONSTRAINT "UQ_89111c7168d73904483de9db8e0"`);
    }

}
