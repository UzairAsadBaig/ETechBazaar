const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

<<<<<<< Updated upstream
exports.getOverview = catchAsync(async (req, res, next) => {
  //   console.log("hello");
  res.status(200).render("base");
=======
const categories = [
  "Drones & Accessories",
  "Laptops & Accessories",
  "CCTV's",
  "LCD's & Displays",
  "Mac",
  "Chargers & Power Adapters",
  "Computers & Accessories",
  "Electronics & Components",
  "Converters & Cables",
  "Attendence & Access Control System",
  "Others",
];

exports.getOverview = catchAsync(async (req, res, next) => {
  const allProducts = await Product.find();
  res.status(200).render("overview", {
    allProducts,
    categories,
  });
>>>>>>> Stashed changes
});
