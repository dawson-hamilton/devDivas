const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const https = require('https');
const fs = require('fs');

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log('listening on PORT' + PORT)
})