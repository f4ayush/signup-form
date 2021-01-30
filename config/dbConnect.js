const mysql = require("mysql");
const config = require("./config.js");

module.exports = mysql.createConnection({
  host: "remotemysql.com",
  database: "HuQ03BCoYI",
  user: "HuQ03BCoYI",
  password: "ZqFx1BmpV6",
});
