require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { StatusCodes } = require("http-status-codes");
const connectToMongo = require("./database/mongo/connect");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const authenticateAdmin = require("./middlewares/auth");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

// Route Middlewares
app.use(express.json());
app.use("/api/v1/admin", authRouter);

// an example of how to use auth
app.use("/", authenticateAdmin, adminRouter);

// error handling middleware
app.use(errorHandlerMiddleware);

app.get("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("<h1>404: Page Not Found.</h1>");
});

const start = async () => {
  try {
    await connectToMongo(process.env.MONGO_URI);
    console.log("connected to MongoDB successfully!");
    app.listen(port, () => console.log("server is listening on port:" + port));
  } catch (err) {
    console.log(err);
  }
};

start();
