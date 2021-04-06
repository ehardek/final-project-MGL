const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const passportLocal = require ("passport-local").Strategy
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(
  session({secret:"pencil",resave:true,saveUninitialized:true})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(
  cors({
  origin:"http://localhost:3000",
  credentials: true,
}))
app.use(cookieParser("pencil"))
// require("./config/passport")(passport)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mygamelibrary");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
