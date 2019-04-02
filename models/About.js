const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AboutSchema = new Schema({
  updated: Date,
  dataResponse: [{
    pl:[{
      title: String,
      text: String,
      label: String,
      field: String,
    }],
    eng:[{
      title: String,
      text: String,
      label: String,
      field: String,
    }],
  }]
})
module.exports = About = mongoose.model("about", AboutSchema);
