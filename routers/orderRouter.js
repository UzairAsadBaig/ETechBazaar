const express = require("express");
const router = express.Router();

//  '/' order

router.post("/"); // add an order

// for admin
router.get("/"); // get all orders by admin

module.exports = router;