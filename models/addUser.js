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

exports.addById = (id, name) => {
  return new Promise((resolve, reject) => {
    database.query(
      `insert into Users(Gid, Name) values("${id}", "${name}")`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};
