const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');
require('dotenv').config();
const { auth } = require('express-openid-connect');
const routes = require('./routes')
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

// const authConfig = {
//     domain: "dev-d5a29j7p.auth0.com",
//     audience: "https://gigitapp.herokuapp.com/profiles"
// };

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//     }),

//     audience: authConfig.audience,
//     issuer: `https://${authConfig.domain}/`,
//     algorithm: ["RS256"]
// });

// app.get("/api/external", checkJwt, (req, res) => {
//     res.send({
//         msg: "Your Access Token was successfully validated!"
//     });
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist");

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// https.createServer({ key, cert }, app).listen(PORT, () => {
//     console.log('listening on PORT' + PORT)
// })

app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });