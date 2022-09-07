const express = require("express");
const { panel } = require("../controllers/admin");
const router = express.Router();

router.get("/panel.html", panel);

module.exports = router;
