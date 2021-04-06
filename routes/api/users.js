var {User} = require("../../models");
var passport = require("../../config/passport");
const passportLocal = require("passport-local").Strategy;
const router = require("express").Router();

const bcrypt =require ("bcryptjs")
//   router.post("/login", passport.authenticate("local"), function(req, res) {
//     res.json(req.user);
//   });
router.post("/login", (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("sucessfully authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  router.post("/signup", function(req, res) {
    // db.User.save({
    //   email: req.body.email,
    //   password: req.body.password
    // })
    //   .then(function() {
    //     res.redirect(307, "/login");
    //   })
    //   .catch(function(err) {
    //     res.status(401).json(err);
    //   });
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("user Created");
        }
      });
      console.log(req.body);
  });

  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.get("/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
module.exports = router