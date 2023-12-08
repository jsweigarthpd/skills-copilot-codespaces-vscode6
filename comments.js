// create web server
// set up routes
// set up middleware
// listen for requests
// respond to requests

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// import routes
const comments = require("./routes/comments");

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up routes
app.use("/api/comments", comments);

// set up static files
app.use(express.static(path.join(__dirname, "../public")));

// listen for requests
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});