const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Must provide name!"],
    },
    password: {
        type: String,
        required: [true, "Must provide password!"],
    },
});

userSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
userSchema.methods.correctPassword = async function(pass, hashPass) {
    return await bcrypt.compare(pass, hashPass);
};

const User = mongoose.model("User", userSchema);
module.exports = User;