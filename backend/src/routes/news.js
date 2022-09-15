const express = require("express");
const { create, update } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.patch("/update/:id", update);

module.exports = router;
