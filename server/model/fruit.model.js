const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
    name: {
        required: [true, "The fruit name is required"],
        type: String
    }
});

const Fruit = mongoose.model("Fruit", FruitSchema);
module.exports = Fruit;