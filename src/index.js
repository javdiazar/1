const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productRouter = require("./routes/productRouter");

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/products", productRouter);

module.exports = app;
