const Fruit = require("../model/fruit.model");

module.exports.createFruit = (req, res) => {
    Fruit.create(req.body)
        .then(newFruit => res.json({ newFruit: newFruit }))
        .catch(err => res.json({ message: "Error trying to create method", error: err }));
}

module.exports.findFruits = (req, res) => {
    Fruit.find()
        .then(fruits => res.json({ fruits: fruits }))
        .catch(err => res.json({ message: "Error trying to find all fruits", error: err }));
}

module.exports.findFruitById = (req, res) => {
    Fruit.findById({ _id: req.params.id })
        .then(fruit => res.json({ fruit: fruit }))
        .catch(err => res.json({ message: "Error trying to find fruit by id", error: err }))
}

module.exports.updateFruit = (req, res) => {
    Fruit.updateOne({ _id: req.params.id })
        .then(resUpdate => res.json({ resUpdate: resUpdate }))
        .catch(err => res.json({ message: "Error trying to update author", error: err }))
}

module.exports.deleteFruit = (req, res) => {
    Fruit.deleteOne({ _id: req.params.id })
    then(resDelete => res.json({ resDelete: resDelete }))
}