angular.module("webSocket", [])
	.factory("socket", function()
	{
		var socket = io("localhost:7777");

		socket.normalLogs = [];
		socket.targetLogs = [];

		socket.setLimit = function(limit){ socket.limit = limit }
		socket.setLogs = function(logs){ socket.normalLogs = logs }
		socket.addLogs = function(logs, $scope)
		{
			if (socket.normalLogs.length >= socket.limit)
				socket.normalLogs.shift();
			socket.normalLogs.push(logs);
			$scope.$digest($scope.normalLogs = socket.normalLogs);
		}
		socket.deleteLogs = function(logs){ socket.normalLogs = [] }
		socket.displayLogs = function($scope, logs){ $scope.$digest(socket.normalLogs = logs)}

		socket.setSLogs = function(logs){ socket.targetLogs = logs }
		socket.addSLogs = function(logs, $scope)
		{
			if (socket.targetLogs.length >= socket.limit)
				socket.targetLogs.shift();
			socket.targetLogs.push(logs);
			$scope.$digest($scope.targetLogs = socket.targetLogs);
		}
		socket.deleteSLogs = function(logs){ socket.targetLogs = [] }
		socket.displaySLogs = function($scope, logs){ $scope.$digest(socket.targetLogs = logs)}

		return (socket);
	});