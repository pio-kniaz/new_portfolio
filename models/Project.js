const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})

module.exports = Project = mongoose.model("project",ProjectSchema);
