const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

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

exports.getOverview = catchAsync(async(req, res, next) => {
    const allProducts = await Product.find();
    res.status(200).render("overview", {
        allProducts,
        categories,
    });
});

exports.login = catchAsync(async(req, res, next) => {
    res.status(200).render("login", {
        categories,
    });
});
exports.dashboard = catchAsync(async(req, res, next) => {
    res.status(200).render("dashboard", {
        categories,
    });
});

exports.getProduct = catchAsync(async(req, res, next) => {
    const doc = await Product.findOne(req.params);

    if (!doc) return next(new AppError("No Product Found!", 404));
    const name = doc.name;
    const category = doc.category;
    const relatedItems = await Product.find({ category });
    const rI = relatedItems.filter((el) => el.name != doc.name);

    const words = name.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    doc.name = words.join(" ");

    res.status(200).render("product", {
        product: doc,
        relatedItems: rI,
        categories,
    });
});