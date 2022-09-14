const News = require("../models/News");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res) => {
  await News.create({ ...req.body });
  
  res
    .status(StatusCodes.CREATED)
    .send({msg:"created the news"});
};

module.exports = { create };