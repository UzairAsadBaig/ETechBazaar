const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// ******************** Search Product
exports.searchProduct = function(req, res,next) {
    console.log(req.params.name);
    Product.search( req.params.name ).then( ( data ) => {
        req.products=data;
        // res.status(200).json({
        //     results: data.length,
        //     Data: data,
        // } )
        next();
    }
    );
};

// ******************** Create Product
exports.createProduct = catchAsync(async function(req, res) {
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