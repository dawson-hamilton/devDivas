const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');
require('dotenv').config();
const { auth } = require('express-openid-connect');
const routes = require('./routes')


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist");

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// https.createServer({ key, cert }, app).listen(PORT, () => {
//     console.log('listening on PORT' + PORT)
// })

app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });