const express = require('express');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

