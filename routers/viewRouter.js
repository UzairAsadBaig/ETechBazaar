const express = require("express");
// const productController = require("../controllers/productController");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getOverview);
module.exports = router;
