const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  media:[String],
  article: {
    type: [String],
    required: [true, "Article is required"],
  },
  createdDate:{
    type: Date,
    default: Date.now(),
  },
  modifiedDate:{
    type: Date,

  }
});

module.exports = mongoose.model("News", NewsSchema);