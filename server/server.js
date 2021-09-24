const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const db = require("./config/db");
//const route = require("./route/author.route");
const app = express();
const port = 8000;


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use( cookieParser() );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db;
//route(app);

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});