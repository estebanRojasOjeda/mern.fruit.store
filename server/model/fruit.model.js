const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
    name: {
        required: [true, "The fruit name is required"],
        type: String
    },
    price: {
        type: Number,
        required: [true, 'The fruit price is require']
    },
    producerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The fruit producer required']
    },
    stock: Number
});

FruitSchema.virtual('producer', {
    ref: 'User',
    localField:'producerId',
    foreignField: '_id'
});

FruitSchema.set('toObject', { virtuals: true });
FruitSchema.set('toJSON', { virtuals: true });


const Fruit = mongoose.model("Fruit", FruitSchema);
module.exports = Fruit;