const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAysnc");
exports.searchProduct = function(req, res) {
  console.log(req.params.name);
  Product.search(req.params.name).then((data) =>
    res.status(200).json({
      results: data.length,
      Data: data,
    })
  );
};
exports.createOne = catchAsync(async function(req, res) {
  const newDoc = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: newDoc,
  });
});
