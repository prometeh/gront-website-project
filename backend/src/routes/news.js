const express = require("express");
const { create, deleteNews } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.delete("/delete/:id", deleteNews);

module.exports = router;
