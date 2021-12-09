const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
// '/' products

router.get("/", productController.getAllPorducts); // get all products
router.get("/:id", productController.getProduct); // get one product based on id
router.get("/category/:category", productController.getCategoryProducts); // get all products of a specific category
router.get("/search/:name", productController.searchProduct); // search products

// // for admin

router.post(
  "/",
  userController.protect,
  productController.uploadProductImage,
  productController.resizeProductImage,
  productController.createProduct
); // add product by admin
router.patch(
  "/:id",
  userController.protect,
  productController.uploadProductImage,
  productController.resizeProductImageU,
  productController.updateProduct
); // update product by admin based on id
router.delete("/:id", userController.protect, productController.deleteProduct); //delete product by admin based on id

module.exports = router;
