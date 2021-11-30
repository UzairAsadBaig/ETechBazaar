const express = require("express");
const router = express.Router();

//  '/' order

// router.post("/"); // add an order

// for admin
router.get("/", function(req, res, next) {
  res.status(200).json({
    message: "hi",
  });
}); // get all orders by admin

module.exports = router;
