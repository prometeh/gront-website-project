const News = require("../models/News");
const { StatusCodes } = require("http-status-codes");

// create news api request

const create = async (req, res) => {
  await News.create({ ...req.body });

  res.status(StatusCodes.CREATED).send({ msg: "created the news" });
};

// update news api request

const update = async (req, res) => {
  const {
    body: { title, article },
    params: { id: newsId },
  } = req;
  if (title === "" || article === "") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "title or article fields can't be empty" });
  }
  const news = await News.findByIdAndUpdate({ _id: newsId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!news) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `There is no news with id: ${newsId} to be updated` });
  }
  res.status(StatusCodes.OK).send({ msg: "News has been updated successfuly" });
};

// deleting news api request

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

// getting all news api request

const getAllNews = async (req, res) => {
  const news = await News.find();
  if (!news) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "There is no news" });
  }

  res.status(StatusCodes.OK).json({ news, count: news.length });
};

module.exports = { create, deleteNews, update, getNews, getAllNews };
