const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decrypted = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, username } = decrypted;
    req.user = { id, username };
    next();
  } catch (err) {
    //TODO: remove the line bellow
    console.log(err);
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Not authorized to access this route" });
  }
};

module.exports = authenticationMiddleware;
