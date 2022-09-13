const express = require("express");
const { login, register, update } = require("../controllers/auth");
const router = express.Router();
const authenticateAdmin = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/update",authenticateAdmin, update);

module.exports = router;
