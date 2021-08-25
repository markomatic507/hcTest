const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

app.set("trust proxy", true);

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

module.exports = app;
