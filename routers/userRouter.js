const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
//FIXME:
const User = require("../models/userModel");

// for admin
router.post("/signUp", userController.signUp);
router.post("/login", userController.login); // admin login
module.exports = router;