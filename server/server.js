const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const db = require("./config/db.config");
const fruitRoute = require("./route/fruit.route");
const userRoute = require("./route/user.route");

const app = express();
const port = 8000;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db;
userRoute(app);
fruitRoute(app);

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});