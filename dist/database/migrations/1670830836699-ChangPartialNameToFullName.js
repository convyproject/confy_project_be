"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1670830836699 = void 0;
class init1670830836699 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "fullName" varchar(255)`);
        await queryRunner.query(`UPDATE "user" AS "u" SET "fullName" = CONCAT_WS(' ', "u"."firstName", "u"."lastName")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
    }
    async down(queryRunner) { }
}
exports.init1670830836699 = init1670830836699;
//# sourceMappingURL=1670830836699-ChangPartialNameToFullName.js.map