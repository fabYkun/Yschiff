var YschiffApp = angular.module("YschiffApp", ["Yschiff"])

YschiffApp.config(function(YschiffProvider){
	YschiffProvider.limit = 5;					// number of tweets displayed at the same time
	YschiffProvider.regex = [/[A-Z0-9]{16}/];	// regular expressions, if one of them match, the tweet goes to blue =)
});

YschiffApp.controller("YschiffCtrl", function ($scope, Yschiff)
{
	var socket = Yschiff.socket;
	var streamStatus = ["activer", "désactiver"];
	var switchStreamStatus = 0;

	$scope.normalLogs = Yschiff.socket.normalLogs;
	$scope.targetLogs = Yschiff.socket.targetLogs;
	$scope.streamStatus = streamStatus[switchStreamStatus];
	$scope.switchStreamStatus = function()
	{
		$scope.streamStatus = streamStatus[(switchStreamStatus = switchStreamStatus ^ 1)];
		socket.emit("setStreamStatus", switchStreamStatus);
	}

	socket.on("newTweet", function(data)
	{
		if (switchStreamStatus == 1)
			Yschiff.analyze(data.tweet, $scope);
	})
});