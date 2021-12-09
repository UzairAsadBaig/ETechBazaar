const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", function(err) {
    console.log(`${err.name} : ${err.message}`);
    console.log(`App is shutting down ......`);
    process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");
//TODO:
mongoose
    .connect(process.env.DB)
    .then((con) => console.log("Database is connected..."));

const server = app.listen(+process.env.PORT, "127.0.0.1", function() {
    console.log(
        `Server has started listening.... at 127.0.0.1:${+process.env.PORT}`
    );
});

process.on("unhandledRejection", function(err) {
    console.log(`${err.name} : ${err.message}`);
    console.log(`App is shutting down ......`);
    server.close(function() {
        process.exit(1);
    });
});