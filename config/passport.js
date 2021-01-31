const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const config = require("./config");
const GoogleStrategy = require("passport-google-oauth20");
// Load User model
const checkUser = require("../models/checkUser");

const addUser = require("../models/addUser");
module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      checkUser.getUser(email).then((data) => {
        if (data[0] == undefined) {
          return done(null, false, { message: "That email is not registered" });
        }

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

  // google signin
  passport.use(
    new GoogleStrategy(
      {
        // options for google strategy
        callbackURL: "/redirect",
        clientID: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
      },
      (accessToken, refreshToken, profile, done) => {
        checkUser.userIdPresent(profile.id).then((data) => {
          if (data[0] == undefined) {
            console.log("a");
            addUser
              .addById(profile.id, profile.displayName)
              .then(console.log)
              .catch(console.error);
            checkUser
              .getUserByGid(profile.id)
              .then((data) => done(null, data[0]))
              .catch(console.error);
          } else {
            console.log("b");
            checkUser
              .getUserByGid(profile.id)
              .then((data) => done(null, data[0]))
              .catch(console.error);
          }
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    console.log(user.id);
    done(null, user.id);
  });

  passport.deserializeUser(function (email, done) {
    checkUser
      .getUserById(email)
      .then((data) => {
        done(null, data[0].Name);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
