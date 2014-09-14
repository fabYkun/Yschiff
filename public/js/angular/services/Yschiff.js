angular.module("Yschiff", ["webSocket"])
	.provider("Yschiff", function()
	{
		this.limit = 20;
		this.regex = [/[.]+/];
		this.$get = function(socket)
		{
			var Yschiff = {"socket": socket, regex: this.regex};

			Yschiff.socket.setLimit(this.limit);
			Yschiff.analyze = function(tweet, $scope)
			{
				var i = -1;
				if (tweet && tweet.text)
				{
					while (Yschiff.regex[++i] && Yschiff.regex[i] instanceof RegExp)
						if (Yschiff.regex[i].test(tweet.text))
						{
							console.log(Yschiff.regex[i]);
							socket.addSLogs(tweet, $scope);
						}
						else
							socket.addLogs(tweet, $scope);
					if (Yschiff.regex[i] && !(Yschiff.regex[i] instanceof RegExp))
						alert("erreur sur l'expression " + Yschiff.regex[i]);
				}
			}
			return (Yschiff);
		}
	});