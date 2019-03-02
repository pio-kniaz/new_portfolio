const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema

const AboutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  topDescription: {
    type: String,
    required: true,
  },
  bottomDescription: {
    type: String,
    required: true,
  },
  updated: {
    type: Date,
    required: true,
  },
});
module.exports = About = mongoose.model("about",AboutSchema);
