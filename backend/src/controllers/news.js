const News = require("../models/News");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res) => {
  await News.create({ ...req.body });

  res.status(StatusCodes.CREATED).send({ msg: "created the news" });
};

// Deleting news api request
const deleteNews = async (req, res) => {
  const {
    params: { id: newsId },
  } = req;
  const news = await News.findByIdAndRemove({ _id: newsId });
  if (!news) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `There is no news with id: ${newsId}` });
  }

  res.status(StatusCodes.OK).send({ msg: "News has been deleted successfuly" });
};

// getting single news api request

const getNews = async (req, res) => {
  const {
    params: { id: newsId },
  } = req;
  const news = await News.findById({ _id: newsId });
  if (!news) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `There is no news with id: ${newsId}` });
  }

  res.status(StatusCodes.OK).json({ news });
};

module.exports = { create, deleteNews, getNews };
