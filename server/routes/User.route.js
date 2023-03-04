const express = require("express");
const { singup, singin } = require("../controllers/User.controller");
const userRouter = express.Router();

userRouter.post("/signup", singup);
userRouter.post("/login", singin);

module.exports = { userRouter };
