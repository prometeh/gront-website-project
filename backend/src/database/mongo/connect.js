const mongoose = require("mongoose");

const connectToMongo = (uri) => {
  return mongoose.connect(uri);
};

module.exports = connectToMongo;
