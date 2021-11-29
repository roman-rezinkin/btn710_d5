const express = require("express");
const app = express();
// const multer = require("multer");
const path = require('path');

const HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.use((req, res) => {
    res.status(404).send("ERROR: 404 Page could not be found.");
})

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
