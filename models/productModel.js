const moongose = require("mongoose");
const validator = require("validator");
const { default: slugify } = require("slugify");
const addPartialFullSearch = require("../utils/partialSearch");

const productSchema = new moongose.Schema({
    name: {
        type: String,
        required: [true, "Product name required!"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price of product required!"],
    },
    model: {
        type: String,
        default: "None",
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category of product is required!"],
        trim: true,
    },
    brand: {
        type: String,
        default: "None",
    },
    color: {
        type: String,
        default: "None",
    },
    description: {
        type: String,
        default: "None",
    },
    instock: {
        type: Boolean,
        default: false,
    },
    condition: {
        type: String,
        enum: {
            values: ["new", "used"],
            message: "No such input",
        },
        required: [true, "Condition is required!"],
    },
    images: [String],
    slug: String,
});

productSchema.pre("save", function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

productSchema.index({ name: "text", brand: "text", model: "text" });

productSchema.plugin(addPartialFullSearch);

const Product = moongose.model("Product", productSchema);
module.exports = Product;