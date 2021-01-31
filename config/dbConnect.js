const mysql = require("mysql");
const config = require("./config.js");

module.exports = mysql.createConnection({
  host: config.MYSQL_HOST,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});
