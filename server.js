require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const projects = require("./projects.json");
const about = require("./about.json");

app.use(cors());
app.use(express.json());
app.use(logger('dev'))

app.get("/", (req, res) => {
  res.json("Hello World")
})

app.get("/about", (req, res) => {
  res.json(about);
})

app.get("/projects", (req, res) => {
  res.json(projects)
})

app.listen(PORT, (req, res) => {
  console.log(`CORS-enabled web server live on ${PORT}`)
})