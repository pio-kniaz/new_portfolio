const express = require("express");
const { mongoose } = require("./db/mongoose.js");
const cors = require('cors')
const app = express();
const passport = require("passport");
// About
const about = require("./routes/api/about");
// User
const users = require("./routes/api/users");

// Body Parserr Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
// about
app.use("/api/",about);
// User
app.use("/api/users", users);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
