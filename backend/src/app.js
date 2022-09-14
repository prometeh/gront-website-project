require("dotenv").config();
require("express-async-errors");

const path = require("path");
const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: "Too many request from this IP"
});
const { StatusCodes } = require("http-status-codes");
const connectToMongo = require("./database/mongo/connect");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const newsRouter = require("./routes/news");
const authenticateAdmin = require("./middlewares/auth");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const app = express();
app.set("trust proxy", 1);
const port = process.env.PORT || 3000;

// Route Middlewares
// Add the limiter function to the express middleware
// so that every request coming from user passes 
// through this middleware.
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use("/api/v1/admin", authRouter);
app.use("/api/v1/news", authenticateAdmin, newsRouter);

// an example of how to use auth
app.use("/admin", authenticateAdmin, adminRouter);

// after protecting the necessary routes
// in dist directory we load everything else
// staticly
app.use(express.static("dist"));

// error handling middleware
app.use(errorHandlerMiddleware);

app.get("*", (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .sendFile(path.join(__dirname + "./../dist/page-not-found.html"));
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
