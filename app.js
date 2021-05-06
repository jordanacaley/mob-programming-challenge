require("dotenv").config();
require("./config/mongodb");
const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");

const baseRouter = require("./router/index.js");

app.use(baseRouter);

app.listen(5000, () => console.log("Ready to rock!"));