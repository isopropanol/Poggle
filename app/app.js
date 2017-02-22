'use strict';

define([
	'angular',
	'common',
	"_",
	'angularRoute',
	'home/home',

	'models/game',
	'models/die',
	'models/word',

	//services
	'services/game'


], function(angular, angularRoute) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.home',

		// models
		'myApp.models.game',
		'myApp.models.die',
		'myApp.models.word',

		//services
		'myApp.services.game'

	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]).
	constant('_',window._);
});
