require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3000,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  CLIENT_ID = process.env.CLIENT_ID,
  CLIENT_SECRET = process.env.CLIENT_SECRET
};

console.log(process.env);
