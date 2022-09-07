const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statuscode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.name && err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statuscode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicated value found for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statuscode = StatusCodes.BAD_REQUEST;
  }

  if (err.name && err.name === "CastError") {
    customError.msg = `No item found with the id: ${err.value}`;
    customError.statuscode = StatusCodes.NOT_FOUND;
  }

  return res.status(customError.statuscode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
