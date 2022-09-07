require("dotenv").config();
const connectToMongo = require("./database/mongo/connect");
var bodyParser = require("body-parser");
const path = require("path");

// Import Routers
const authRoute =require("./routes/auth");
const postRoute= require("./routes/post");

const express = require("express");
const { StatusCodes } = require("http-status-codes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

// Route Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user",authRoute);
app.use("/api/posts",postRoute);

app.get("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).sendFile(path.join(__dirname + "./../dist/page-not-found.html"));
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
 