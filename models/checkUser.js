const database = require("../config/dbConnect");

database.connect((err) => {
  if (err) {
    // res.send("Internal server error");
    console.log(err);
  }
});

exports.userPresent = (email) => {
  return new Promise((resolve, reject) => {
    database.query(
      `select Email from Users where Email = "${email}"`,
      (error, results, fields) => {
        if (error) return reject(error);
        console.log(results);
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
        console.log(results);
        resolve(results);
      }
    );
  });
};
