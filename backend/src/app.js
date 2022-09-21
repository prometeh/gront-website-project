require("dotenv").config();
require("express-async-errors");

const path = require("path");
const express = require("express");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const { v4: uuidv4 } = require("uuid");
const helmet = require("helmet");
const xss = require("xss-clean"); // TODO: reconsider this package
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { StatusCodes } = require("http-status-codes");
const connectToMongo = require("./database/mongo/connect");
const authRouter = require("./routes/auth");
const newsRouter = require("./routes/news");
const { authenticate, isAuthenticated } = require("./middlewares/auth");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: "Too many request from this IP",
});

app.set("trust proxy", 1);

// Middlewares
app.use(
  session({
    genid: function () {
      return uuidv4(); // use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET,
    name: "grontSessionId",
    store: mongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      crypto: {
        secret: process.env.SESSION_DB_SECRET,
      },
    }),
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: "auto",
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(xss());
app.use("/api/v1/admin", authRouter);
app.use("/api/v1/news", authenticate, newsRouter);
app.use("/admin", isAuthenticated);
app.use(express.static("dist"));
app.use(errorHandlerMiddleware);

app.get("*", (_req, res) => {
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
