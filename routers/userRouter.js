const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAysnc");

//FIXME:
const User = require("../models/userModel");

// for admin
router.get(
  "/login",
  catchAsync(async function(req, res, next) {
    await User.create({
      username: "uzair;moon",
      password: "jjhkhj",
    });
    res.status(200).json({
      status: "Ho gya",
    });
  })
); // admin login
module.exports = router;
