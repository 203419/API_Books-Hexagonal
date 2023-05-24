import { Sequelize } from 'sequelize';

import { config } from './config';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.dbHost,
  port: Number(config.dbPort),
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  logging: false, 
});
