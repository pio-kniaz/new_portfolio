require('dotenv').config();
module.exports = {
  mongoURI: process.env.MONGOURI,
  secret: process.env.SECRET,
};
