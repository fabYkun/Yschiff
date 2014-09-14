module.exports = function(express, root)
{
	var module = {"root": root};

	var favicon = require("serve-favicon");
	var swig = require("swig");
	var app = express();

	swig.setDefaults({varControls: ["{[", "]}"], cache: false});
	app.use(express.static(root + "/public"));
	app.use(favicon(root + "/public/images/favicon/favicon.ico"));

	app.engine("html", swig.renderFile);
	app.set("view cache", false);
	app.set("view engine", "html");
	app.set("views", root + "/views");
	app.set("main", "Yschiff");

	module.swig = swig;
	module.io = require("socket.io").listen(app.listen(7777));
	module.app = app;

	console.log("server listening on port 7777");
	return (module);
};