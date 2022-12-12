import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1670830836699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD COLUMN "fullName" varchar(255)`,
    );
    await queryRunner.query(
      `UPDATE "user" AS "u" SET "fullName" = CONCAT_WS(' ', "u"."firstName", "u"."lastName")`,
    );

    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);

    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
