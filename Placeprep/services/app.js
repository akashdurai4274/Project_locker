const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userRouter = require('./Routes/userRoute')
const multer = require("multer");
const path = require('path');

app.use(express.static(__dirname));


app.use((req, res, next) => {
    res.send("Welcome")
})

module.exports = app;
