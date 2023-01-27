const express = require("express");
const app = express();
const IP = require("ip");
const os = require("os");

app.get("/", function (req, res) {
  const ipAddress = IP.address();
  const hostName = os.hostname();
  res.send("I am running on   " + hostName + "   ->    " + ipAddress);
});

app.get("/mars", function (req, res) {
  res.send("Hello Mars!\n");
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

module.exports = app;
