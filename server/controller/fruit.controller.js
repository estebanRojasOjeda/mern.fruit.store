const Fruit = require("../model/fruit.model");
const jwtConfig = require('../config/jwt.config');
const jwt = require('jsonwebtoken');

module.exports.createFruit = (req, res) => {
    jwt.verify(req.cookies.usertoken, jwtConfig.secret, (error, payload) => {
        if(!error) {
            const prod = req.body;
            prod.producerId = payload.id;
            Fruit.create(req.body)
            .then(newFruit => res.json({ newFruit: newFruit }))
            .catch(err => res.status(500).json(err));
        } else {
            res.status(500).json(error);
        }
    });    
}

module.exports.findFruits = (req, res) => {
    Fruit.find({}).populate('producer')
        .then(fruits => res.json({ fruits: fruits }))
        .catch(err => res.json({ message: "Error trying to find all fruits", error: err }));
}

module.exports.findFruitById = (req, res) => {
    Fruit.findById(req.params.id).populate('producer')
        .then(fruit => res.json({ fruit: fruit }))
        .catch(err => res.json({ message: "Error trying to find fruit by id", error: err }))
}

module.exports.updateFruit = (req, res) => {
    Fruit.findByIdAndUpdate(req.params.id, req.body)
        .then(resUpdate => res.json({ resUpdate: resUpdate }))
        .catch(err => res.json({ message: "Error trying to update author", error: err }))
}

module.exports.deleteFruit = (req, res) => {
    Fruit.findOneAndRemove({ _id: req.params.id })
    .then(resDelete => res.json({ resDelete: resDelete }))
    .catch(err => res.status(500).json(err))
}