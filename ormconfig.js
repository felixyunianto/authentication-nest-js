module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
