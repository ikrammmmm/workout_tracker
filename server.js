const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config()

const PORT = process.env.PORT || 3000;

const app = express();


app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// routes
app.use(require("./routes/api_routes.js"));
require("./routes/frontend_routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});