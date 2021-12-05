const express = require("express");
const productController = require("../controllers/productController");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getOverview);
router.get("/product/:slug", viewController.getProduct);
router.get("/admin/login", viewController.login);
router.get("/admin/dashboard", viewController.dashboard);
router.get( "/search/:name", productController.searchProduct,viewController.getAllRelatedProducts )



module.exports = router;