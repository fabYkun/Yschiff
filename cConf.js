module.exports = function(express, root)
{
	var twit = require("twit");
	var keywords = "";

	twit = new twit({
		consumer_key: "",
		consumer_secret: "",
		access_token: "",
		access_token_secret: ""
	});

	return (twit.stream("statuses/filter", {track: keywords}));
}