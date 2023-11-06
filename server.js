
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.redirect("/index");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);