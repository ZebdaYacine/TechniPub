require("dotenv").config();

const localConfig = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST,
  MONGO_URL: process.env.MONGO_URL,
  FRONTEND: process.env.FRONTEND,
  SALT: process.env.SALT,
  KEY: process.env.ACCES_TOKEN_KEY,
};

module.exports = localConfig;
