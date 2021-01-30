const database = require("../config/dbConnect");

exports.add = (email, name, password) => {
  return new Promise((resolve, reject) => {
    database.query(
      `insert into Users(Email, Name, Password) values("${email}", "${name}", "${password}")`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};
