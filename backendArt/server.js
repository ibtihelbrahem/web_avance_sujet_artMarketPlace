const express = require('express');
const mongoose = require('mongoose');
const app = express();
var artworkAPI = require('./route/artwork');
var artistAPI = require('./route/artist');
const cors = require ('cors');

app.use(express.json());
app.use(cors());
app.listen(3000,'127.0.0.1', function check(err) {
    if (err)
        console.log("error");
    else
        console.log("started");
});

mongoose.connect("mongodb://localhost:27017/Art")
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.log("Error connecting to the database:", error);
    });
    app.use('/artwork' , artworkAPI);
    app.use('/artist' , artistAPI);
    app.use('/getimage', express.static('./uploads'));
