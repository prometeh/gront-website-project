const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

// TODO: need to implement verify via email
const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.username }, token });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Username & password are required to proceed" });
    next();
  }

  const user = await User.findOne({ username });

  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid username" });
    next();
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid password" });
    next();
  }

  const token = user.createJWT();

  // TODO: make a better error handling
  req.session.regenerate((err) => {
    if (err) {
      console.log(err);
      next();
    }

    req.session.user = req.body.username;
    req.session.jwt = token;
    req.session.save((err) => {
      if (err) {
        console.log(err);
        next();
      }

      res.status(StatusCodes.OK).json({ user: { name: user.username }, token });
      next();
    });
  });
};

const logout = async (req, res) => {
  req.session.user = null;
  req.session.jwt = null;
  req.session.save((err) => {
    if (err) console.log(err);
    req.session.regenerate((err) => {
      if (err) console.log(err);
    });
  });
  res.redirect("/admin/admin.html");
};

//Update password
const update = async (req, res) => {
  const { username, oldpassword, newpassword } = req.body;

  if (!username || !oldpassword || !newpassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Fill the required field to proceed" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Invalid username" });
  }

  const isPasswordCorrect = await user.comparePassword(oldpassword);

  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Invalid Old password" });
  }
  if (newpassword.length >= 6) {
    const encryptednewpassword = await user.encryptPassword(newpassword);
    const updateuser = await User.findOneAndUpdate(
      { username },
      { $set: { password: encryptednewpassword } }
    );
    if (updateuser) {
      return res.json("Password has been changed successfully");
    }
  } else {
    return res.json("New Password length should be greater than 6 character");
  }
};

module.exports = { register, login, logout, update };
