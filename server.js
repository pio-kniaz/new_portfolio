const express = require("express");
const { mongoose } = require("./db/mongoose.js");
const cors = require('cors')
const app = express();
const passport = require("passport");
// About
const about = require("./routes/api/about");
// User
const users = require("./routes/api/users");
// Project
const project = require("./routes/api/projects");

// Body Parserr Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

// About
app.use("/api/", about);
// User
app.use("/api/users", users);
// Project
app.use("/api/", project);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
