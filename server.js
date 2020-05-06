const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');
const cors = require("cors");
require('dotenv').config();
const { auth } = require('express-openid-connect');
const routes = require('./routes')
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
// const cors = require("cors");
const app = express();


app.use(cors({ origin: 'http://localhost:3000' }))



const PORT = process.env.PORT || 3001;
var checkJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-d5a29j7p.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://letsgigit.com/api',
    issuer: 'https://dev-d5a29j7p.auth0.com/',
    algorithms: ['RS256']
});

app.use(checkJwt);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});
app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});
app.get("/api/gigs", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist");

app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });