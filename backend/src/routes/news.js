const express = require("express");
const { create, deleteNews, getNews, getAllNews, update } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.delete("/delete/:id", deleteNews);
router.patch("/update/:id", update);
router.get("/get/:id", getNews);
router.get("/get", getAllNews);

module.exports = router;
