const express = require('express')
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/db');

connectDB();
const app = express()
app.use(bodyParser.json())


app.use('/' , require('./routes/employessRoutes'));

app.listen(5000);