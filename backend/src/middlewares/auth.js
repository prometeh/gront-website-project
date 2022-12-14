const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  let authHeader = "";

  if (req.session && req.session.jwt) {
    authHeader = `Bearer ${req.session.jwt}`;
  } else {
    authHeader = req.headers.authorization;
  }

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
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Not authorized to access this route" });
  }
};

const isAuthenticated = (req, res, next) => {
  try {
    const decrypted = jwt.verify(req.session.jwt, process.env.TOKEN_SECRET);
    const { name } = decrypted;
    if (req.session.user && req.session.user === name) {
      next();
    }
  } catch (err) {
    if (res !== {}) {
      res.redirect("/admin.html");
    }
  }
};

module.exports = { authenticate, isAuthenticated };
