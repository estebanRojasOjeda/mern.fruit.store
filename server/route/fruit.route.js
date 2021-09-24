const FruitController = require("../controller/fruit.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/fruit/new", authenticate, FruitController.createFruit);
    app.get("/api/fruit/all", authenticate, FruitController.findFruits);
    app.get("/api/fruit/:id", authenticate, FruitController.findFruitById);
    app.put("/api/fruit/:id", authenticate, FruitController.updateFruit);
    app.delete("/api/fruit/:id", authenticate, FruitController.deleteFruit);
}