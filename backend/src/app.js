require("dotenv").config();
const connectToMongo = require("./database/mongo/connect");

const express = require("express");
const { StatusCodes } = require("http-status-codes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("<h1>404: Page Not Found.</h1>");
});

const start = async () => {
  try {
    await connectToMongo(process.env.MONGO_URI);
    console.log("connected to MongoDB successfully!");
    app.listen(port, () => console.log("server is listening on port:" + port));
  } catch (err) {
    throw new Error(err);
  }
};

start();
