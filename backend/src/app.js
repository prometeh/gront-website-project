const express = require("express");
const { StatusCodes } = require("http-status-codes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("<h1>404: Page Not Found.</h1>");
});

app.listen(port, () => console.log("server is listening on port:" + port));
