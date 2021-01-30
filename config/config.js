const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT || 3000,
  MYSQL_HOST: process.env.HOST,
  MYSQL_DATABASE: process.env.DATABASE,
  MYSQL_USER: process.env.USER,
  MYSQL_PASSWORD: process.env.PASSWORD,
};
