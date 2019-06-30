"use strict";

const Hapi = require("hapi");
const mongoose = require("mongoose");
const MongoDBUrl = "mongodb://localhost:27017/inventory-app-of-my-dreams";
mongoose.set("useCreateIndex", true);

// TODO (Eddie): Implement delete HTTP methods

var routes = require("./config/routes");

// Create a server with a host and port
const server = new Hapi.Server({
  host: "localhost",
  port: 3001,
  routes: {
    cors: true,
  },
});

const start = async function() {
  try {
    // Initialize routes
    server.route(routes);

    // Connect to DB
    mongoose.connect(MongoDBUrl, { useNewUrlParser: true }).then(
      () => {
        console.log(`Connected to Mongo server`);
      },
      err => {
        console.log(err);
      }
    );

    // Start the server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log("Hapi error starting server", err);
  }
};

start();
