const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const { auth } = require("express-openid-connect");

const config = {
    required: false,
    auth0Logout: true,
    baseURL: "https://localhost:3000",
    issuerBaseURL: "https://dev-d5a29j7p.auth0.com",
    clientID: process.env.GigItClientId,
    appSessionSecret: process.env.GigItAppSessionSecret
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});


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