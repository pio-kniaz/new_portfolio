const express = require("express");
const { mongoose } = require("./db/mongoose.js");
const app = express();
const about = require("./routes/api/about");
// Body Parserr Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
// about aoute
app.use("/api/",about);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
