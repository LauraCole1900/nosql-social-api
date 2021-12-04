const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./api_routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes);

// All other requests sent to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-media_db",
);

// Start the server
app.listen(PORT, () =>
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`)
);