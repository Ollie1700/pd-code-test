import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialStructure1594905301144 implements MigrationInterface {
    name = 'InitialStructure1594905301144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attachment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_d2a80c3a8d467f08a750ac4b420" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "settings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "userId" uuid NOT NULL, "settingsId" uuid NOT NULL, CONSTRAINT "UQ_3dd8bfc97e4a77c70971591bdcb" UNIQUE ("id"), CONSTRAINT "REL_a24972ebd73b106250713dcddd" UNIQUE ("userId"), CONSTRAINT "REL_ec6d70f70514329dbe80f6eaae" UNIQUE ("settingsId"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "chatId" uuid NOT NULL, "senderId" uuid NOT NULL, "attachmentId" uuid, CONSTRAINT "UQ_ba01f0a3e0123651915008bc578" UNIQUE ("id"), CONSTRAINT "REL_619bc7b78eba833d2044153bac" UNIQUE ("chatId"), CONSTRAINT "REL_bc096b4e18b1f9508197cd9806" UNIQUE ("senderId"), CONSTRAINT "REL_0470b69142d519e3a6dc098bec" UNIQUE ("attachmentId"), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chat" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "UQ_9d0b2ba74336710fd31154738a5" UNIQUE ("id"), CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chat_participants_profile" ("chatId" uuid NOT NULL, "profileId" uuid NOT NULL, CONSTRAINT "PK_33b746567bd41ca9d2b2d4dc965" PRIMARY KEY ("chatId", "profileId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b17f1a411d07b95086fedca720" ON "chat_participants_profile" ("chatId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c6534b94f475d6c97446f906f3" ON "chat_participants_profile" ("profileId") `);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_a24972ebd73b106250713dcddd9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_ec6d70f70514329dbe80f6eaaed" FOREIGN KEY ("settingsId") REFERENCES "settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_619bc7b78eba833d2044153bacc" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_0470b69142d519e3a6dc098becd" FOREIGN KEY ("attachmentId") REFERENCES "attachment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_participants_profile" ADD CONSTRAINT "FK_b17f1a411d07b95086fedca7202" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_participants_profile" ADD CONSTRAINT "FK_c6534b94f475d6c97446f906f30" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_participants_profile" DROP CONSTRAINT "FK_c6534b94f475d6c97446f906f30"`);
        await queryRunner.query(`ALTER TABLE "chat_participants_profile" DROP CONSTRAINT "FK_b17f1a411d07b95086fedca7202"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_0470b69142d519e3a6dc098becd"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_619bc7b78eba833d2044153bacc"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_ec6d70f70514329dbe80f6eaaed"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_a24972ebd73b106250713dcddd9"`);
        await queryRunner.query(`DROP INDEX "IDX_c6534b94f475d6c97446f906f3"`);
        await queryRunner.query(`DROP INDEX "IDX_b17f1a411d07b95086fedca720"`);
        await queryRunner.query(`DROP TABLE "chat_participants_profile"`);
        await queryRunner.query(`DROP TABLE "chat"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "attachment"`);
    }

}
