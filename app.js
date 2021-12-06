//Dependencies
const path = require("path");
const express = require(`express`);
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");

//Routers
const viewRouter = require("./routers/viewRouter");
const orderRouter = require("./routers/orderRouter");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

const app = express();

// Defining Template Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", viewRouter);
// app.use("/", viewRouter);

//Providing a static path
app.use(express.static(path.join(__dirname, "public")));

// Global Middleware
//Add security
app.use(helmet());
//Development mode logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
//In order to access req.body
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

//Attach request time
app.use(function(req, res, next) {
    req.requestTime = new Date();
    next();
});
//Limit the number of requests
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request sent! Please try again after 1 hour",
});
app.use("/api", limiter);
//Adding sanitization  for Nosql injection
app.use(mongoSanitize());
//Adding XSS security(JS or HTML code)
app.use(xssClean());

// Preventing parameter polution
// app.use(
//   hpp({
//     whitelist: [
//       "duration",
//       "sort",
//       "ratingsAverage",
//       "ratingsQuantity",
//       "price",
//       "difficulty",
//       "maxGroupSize",
//     ],
//   })
// );

//Mounting our middlewares

app.use("/api/v1/order", orderRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.all("*", function(req, res, next) {
    next(
        new AppError(`Couldn't find ${req.originalUrl} url on the server!`, 404)
    );
});

app.use(globalErrorHandler);
module.exports = app;