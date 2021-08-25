import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserTable1629909406626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'users',
                columns : [
                    {
                        name : 'id',
                        type : 'int4',
                        isPrimary : true,
                        isGenerated: true,
                        generationStrategy : 'increment',
                    },
                    {
                        name : 'email',
                        type: 'varchar',
                        isUnique : true,
                        isNullable: false
                    },
                    {
                        name : 'password',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name : 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name : 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE users`);
    }

}
