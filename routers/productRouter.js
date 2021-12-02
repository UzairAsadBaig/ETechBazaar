const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
// '/' products

// router.get("/"); // get all products
// router.get("/:id",); // get one product based on id
// router.get(":category"); // get all products of a specific category
router.get("/search/:name", productController.searchProduct); // search products

// // for admin

router.post("/", productController.createOne); // add product by admin
// router.patch("/:id"); // update product by admin based on id
// router.delete("/:id"); //delete product by admin based on id

module.exports = router;
