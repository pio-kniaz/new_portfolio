const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  updated: Date,
  dataResponse: [{
    pl:[{
      title: String,
      text: String,
      label: String,
      field: String,
      fieldName: String,
    }],
    eng:[{
      title: String,
      text: String,
      label: String,
      field: String,
      fieldName: String,
    }],
  }]
})
module.exports = About = mongoose.model("about", AboutSchema);
