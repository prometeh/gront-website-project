const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
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
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Not authorized to access this route" });
  }
};

// TODO: auth needs review again
const isAuthenticated = (req, res, next) => {
  try {
    const decrypted = jwt.verify(req.session.jwt, process.env.TOKEN_SECRET);
    const { name } = decrypted;
    if (req.session.user && req.session.user === name) {
      res.status(StatusCodes.OK);
      next();
    }
  } catch (err) {
    console.log(err);
    if (res !== {}) {
      res.redirect("/admin.html");
      next();
    }
  }
};

module.exports = { authenticate, isAuthenticated };
