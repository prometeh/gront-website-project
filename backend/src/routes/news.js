const express = require("express");
const { create, update, deleteNews } = require("../controllers/news");
const router = express.Router();

router.post("/create", create);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteNews);

module.exports = router;
