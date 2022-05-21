require('./about.json');
require('./projects.json');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Root directory")
})

app.listen(PORT, (req, res) => {
  console.log(`CORS-enabled web server live on ${PORT}`)
})