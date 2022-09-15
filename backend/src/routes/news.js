const express = require("express");
const { create, deleteNews, getNews } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.delete("/delete/:id", deleteNews);
router.get("/get/:id", getNews);

module.exports = router;
