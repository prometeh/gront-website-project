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

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Username & password are required to proceed" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Invalid username" });
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Invalid password" });
  }

  const token = user.createJWT();

  req.session.regenerate((err) => {
    if (err) {
      console.log(err.message);
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: err.message });
    }

    req.session.user = req.body.username;
    req.session.jwt = token;
    req.session.save((err) => {
      if (err) {
        console.log(err.message);
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: err.message });
      }

      return res
        .status(StatusCodes.OK)
        .json({ user: { name: user.username }, token });
    });
  });
};

const logout = async (req, res) => {
  try {
    req.session.user = null;
    req.session.jwt = null;
    req.session.save(() => {
      req.session.regenerate(() => {
        res.redirect("/admin.html");
      });
    });
  } catch (err) {
    console.log(err);
  }
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
