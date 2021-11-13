const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();
const { auth } = require('express-openid-connect');
const routes = require('./routes')
const cors = require("cors");
const db = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('*', ( req, res ) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist");
db.once('open', () => {
    app.listen(PORT, function () { 
        console.log("Listening to PORT" + PORT);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
})
