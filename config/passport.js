const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load User model
// const User = require("../models/User");
const checkUser = require("../models/checkUser");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      checkUser.getUser(email).then((data) => {
        if (data[0] == undefined) {
          return done(null, false, { message: "That email is not registered" });
        }

        // bcrypt.compare(password);
        // Match password
        bcrypt.compare(password, data[0].Password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, data[0]);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.Email);
  });

  passport.deserializeUser(function (email, done) {
    // console.log(id);
    checkUser
      .getUser(email)
      .then((data) => {
        console.log(data[0].Name);
        done(null, data[0].Name);
      })
      .catch(() => {
        console.log("err");
      });
  });
};
