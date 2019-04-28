const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  updated: Date,
  dataResponse: [{
    pl:[{
      title: String,
      subtitle: String,
    }],
    eng:[{
      title: String,
      subtitle: String,
    }],
  }]
});
module.exports = Contact = mongoose.model("contact", ContactSchema);
