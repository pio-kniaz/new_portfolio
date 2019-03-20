const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema

// const AboutSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   topDescription: {
//     type: String,
//     required: true,
//   },
//   bottomDescription: {
//     type: String,
//     required: true,
//   },
//   updated: {
//     type: Date,
//     required: true,
//   },
// });
var AboutSchema = new Schema({
  name: String,
  conditions1: [{}],
  conditions2: [{}]
});
module.exports = About = mongoose.model("about", AboutSchema);
