const express = require("express");
const productController = require("../controllers/productController");
const viewController = require("../controllers/viewController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", viewController.getOverview);
router.get("/product/:slug", viewController.getProduct);
router.get("/admin/login", viewController.login);
router.get(
    "/admin/dashboard",
    userController.protect,
    viewController.dashboard
);
router.get(
    "/search/:name",
    productController.searchProduct,
    viewController.getAllRelatedProducts
);
router.get("/categories/:category", viewController.getCategory);
router.get("/order/:id", viewController.oneOrderInfo);
module.exports = router;