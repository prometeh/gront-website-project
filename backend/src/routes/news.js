const express = require("express");
const { create, deleteNews, getNews, update } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.delete("/delete/:id", deleteNews);
router.patch("/update/:id", update);
router.get("/get/:id", getNews);

module.exports = router;
