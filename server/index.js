// Require express module
const express = require("express");
const app = express();
const PORT = 7000;

const mongoURI = "mongodb://localhost/url-shortner";
const mongoose = require("mongoose");
const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};
//Connect to MongoDB 
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) console.log(`Error`, er);
  console.log(`Connected to MongoDB`);
});

require('./models/UrlShorten')
require("./routes/urlshorten")(app);



//Start server on Port 7000
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});

