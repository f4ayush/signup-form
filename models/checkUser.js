const database = require("../config/dbConnect");

database.connect((err) => {
  if (err) {
    console.log(err);
  }
});

exports.userPresent = (email) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select Email from Users where Email = "${email}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};

exports.userIdPresent = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select Gid from Users where Gid = "${id}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};

exports.getUser = (email) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select * from Users where Email = "${email}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};

exports.getUserByGid = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select * from Users where Gid = "${id}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select * from Users where id = "${id}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      }
    );
  });
};
