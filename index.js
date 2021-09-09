const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(keys.mongoURI, async (err) => {
  if (err) throw err;
  console.log("Connected to Brainhub database. (MongoDB)");
});

require("./routes/formRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
