var express = require("express");
var all = require("./sConf")(express, __dirname);

require("./routes")(all);

var stream = require("./cConf")();
all.io.on("connection", function(socket)
{
	stream.on("tweet", function(data) {
		socket.emit("newTweet", {tweet: data})
	});
});