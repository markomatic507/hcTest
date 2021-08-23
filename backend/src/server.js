const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/", router);

module.exports = app;
