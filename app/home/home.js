'use strict';
define([
	'angular',
	'angularRoute',

	'models/game',

	'services/game'
], function(angular) {
	angular.module('myApp.home', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		});
	}])
	.controller('HomeCtrl', ['$scope', 'GameService', function($scope, GameService) {
		$scope.game = GameService.game;

		$scope.toggleDie = function (die) {
			GameService.toggleDie(die);
		}

		$scope.addWord = function () {
			GameService.addWord();
		}

		$scope.totalScore = function () {
			return GameService.score();
		}
	}]);
});
