import dotenv from 'dotenv';

const result = dotenv.config();

if (result?.error) {
  throw new Error('Add .env file');
}

export const config = {
  env: process.env.SZ_ENV,
  appName: process.env.SZ_APP,
  port: process.env.SZ_PORT,
  mongoUri: `mongodb+srv://gazi:AmraGazi9@schoolzone.tc7ue9b.mongodb.net/test`,
}
