require("dotenv").config();

const express = require("express");
const passport = require("passport");

const cors = require("cors");
const connection = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");
const {
  registerStrategy,
  loginStrategy,
  verifyStrategy,
} = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());
//app.use(passport.initialize());

//http://localhost/user/registeruser
// {
//   "name": "dylan",
//   "password": "somestringoranother"
// }
//http://localhost/user/getallusers - send request (req)
app.use("/user", userRouter);
// app.use("/login", userRouter);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);
// passport.authenticate("name", callback);

app.listen(process.env.PORT, () => {
  connection.authenticate();
  User.sync({ alter: true });
  console.log("App is online");
});
