const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {User} = require("../models");
const bcrypt = require("bcryptjs");
// passport.use(
//     new LocalStrategy(
//         {
//             usernameField:"email"
//         },
//         (email,password,done)=>{
//             db.User.findOne({
//                 email:email
//             }).then(dbUser=>{
//                 if(!dbUser){
//                     return done(null,false,{
//                         message:"Wrong email."
//                     });
//                 }
//                 else if (!dbUser.validPassword(password)) {
//                     return done(null, false, {
//                       message: "Incorrect password."
//                     });
//                   }
//                   return done(null, dbUser);
//             });

//         }
//     )
// );
// passport.serializeUser((user, cb) => {
//     cb(null, user);
//   });
  
//   passport.deserializeUser((obj, cb) => {
//     cb(null, obj);
//   });
  
// module.exports = function (passport) {
    passport.use(
      new LocalStrategy((email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      })
    );
  
    passport.serializeUser((user, cb) => {
      cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
      User.findOne({ _id: id }, (err, user) => {
        const userInfo = {
          email: user.email,
        };
        //   if (err) throw err;
        cb(err, userInfo);
      });
    });
//   };
module.exports= passport
 