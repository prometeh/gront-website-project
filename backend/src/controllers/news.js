const News = require("../models/News");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res) => {
  await News.create({ ...req.body });

  res.status(StatusCodes.CREATED).send({ msg: "created the news" });
};

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

module.exports = { create, deleteNews };
