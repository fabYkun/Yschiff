module.exports = function(all)
{
	var handler = function(req, res)
	{
		var	swig = {};

		swig.main = swig.title = all.app.get("main");
		res.render("index", swig);
	}

	all.app.get("/", handler);
};