const express = require("express");
const { dashboard } = require("../controllers/admin");
const router = express.Router();

router.get("/dashboard.html", dashboard);

module.exports = router;
