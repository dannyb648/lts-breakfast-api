const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(config.port);
console.log(`Central Server listening on port ${config.port}`);

app.get("/api/test", (req, res) => {
  res.status(200).send({ text: "hello" });
});

module.exports = app;
