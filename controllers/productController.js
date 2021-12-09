const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const sharp = require("sharp");

// *************** Image uploading and processing
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        req.file = file;
        cb(null, true);
    } else {
        cb(new AppError("Only image file can be uploaded", 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

exports.uploadProductImage = upload.single("images");
exports.resizeProductImage = (req, res, next) => {
    if (!req.file)
        return next(new AppError("Please select image for product!", 400));

    req.file.filename = `product-${Date.now()}.jpeg`;

    sharp(req.file.buffer)
        .resize(1200, 800)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`Public/img/products/${req.file.filename}`);

    next();
};
exports.resizeProductImageU = (req, res, next) => {
    if (!req.file) return next();
    req.file.filename = `product-${Date.now()}.jpeg`;

    sharp(req.file.buffer)
        .resize(1200, 800)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`Public/img/products/${req.file.filename}`);

    next();
};

// ******************** Search Product
exports.searchProduct = function(req, res, next) {
    Product.search(req.params.name).then((data) => {
        req.products = data;
        next();
    });
};

// ******************** Create Product
exports.createProduct = catchAsync(async function(req, res) {
    req.body.images = [`${req.file.filename}`];

    const newDoc = await Product.create(req.body);
    res.status(200).json({
        status: "success",
        data: newDoc,
    });
});

// ******************** Get All Products
exports.getAllPorducts = catchAsync(async(req, res, next) => {
    const products = await Product.find();

    if (!products) {
        return next(new AppError("No Product Found!", 404));
    }

    res.status(200).json({
        status: "success",
        results: products.length,
        data: products,
    });
});

// ******************** Get Single Product
exports.getProduct = catchAsync(async(req, res, next) => {
    const id = req.params.id;
    const prod = await Product.findById(id);

    if (!prod) {
        return next(new AppError("No Product Found!", 404));
    }

    res.status(200).json({
        status: "success",
        product: prod,
    });
});

// ******************** Get All Products of specific category
exports.getCategoryProducts = catchAsync(async(req, res, next) => {
    const { category } = req.params;
    const prods = await Product.find({ category });

    if (!prods) {
        return next(new AppError("No Product Found!", 404));
    }
    res.status(200).json({
        status: "success",
        results: prods.length,
        data: prods,
    });
});

// Delete product by id
exports.deleteProduct = catchAsync(async(req, res, next) => {
    const doc = await Product.findByIdAndDelete(req.params.id);
    if (!doc) {
        return next(new AppError("No such document exist with that ID"), 404);
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
});

// update product by id
exports.updateProduct = catchAsync(async(req, res, next) => {

    if (req.file) req.body.images = [`${req.file.filename}`];

    const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!doc) {
        return next(new AppError("No such document exist with that ID"), 404);
    }
    res.status(200).json({
        status: "success",
        data: {
            doc,
        },
    });
});