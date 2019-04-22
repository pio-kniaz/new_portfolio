const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    required: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Buffer,
  },
});
module.exports = Project = mongoose.model("project", ProjectSchema);
