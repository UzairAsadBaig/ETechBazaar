const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");
//all orders
exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find();

  if (!orders) {
    return next(new AppError("No Product Found!", 404));
  }
  res.status(200).json(orders);
});
//new order
exports.newOrder = catchAsync(async (req, res, next) => {
  // res.send(req.body);
  const order = new Order(req.body);
  console.log(order);
  await order.save();
  res.status(200).json({
    status: "success",
    data: order,
  });
});
//single order
exports.getOrder = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const ord = await Order.findById(id);

  if (!ord) {
    return next(new AppError("No Product Found!", 404));
  }

  res.status(200).json({
    status: "success",
    product: ord,
  });
});
