const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api_routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-media_db");

// Start the server
app.listen(PORT, () =>
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`)
);