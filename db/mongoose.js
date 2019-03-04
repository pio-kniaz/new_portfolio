const mongoose = require("mongoose");
const dbSettings = require(".././config/keys");
mongoose.Promise = global.Promise;
mongoose.connect(
  dbSettings.mongoURI,
  { useNewUrlParser: true }
);

module.exports = {
  mongoose
};
