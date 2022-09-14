const express = require("express");
const { create } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);

module.exports = router;
