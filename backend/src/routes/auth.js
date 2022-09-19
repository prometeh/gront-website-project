const express = require("express");
const { login, register, update } = require("../controllers/auth");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/update", authenticate, update); // TODO: move this to userroute

module.exports = router;
