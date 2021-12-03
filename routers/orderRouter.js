const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

//  '/' order
router.get("/", orderController.getAllOrders); // get all orders
router.post("/", orderController.newOrder); //post new order

module.exports = router;
