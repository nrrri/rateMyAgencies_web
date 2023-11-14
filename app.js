const HTTP_PORT = process.env.PORT || 8080;
const express = require('express');
const path = require('path');

const app = express();

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static(path.join(__dirname,'public')));

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/index.html"))
// });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

// app.listen(3000,() => {
//     console.log("App listening on port 3000");
// });