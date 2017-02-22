'use strict';

define([
	'angular',
	'common',
	"_",
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'home/home',

	'models/game',
	'models/die',

	//services
	'services/game'


], function(angular, angularRoute) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.view1',
		'myApp.view2',
		'myApp.home',

		// models
		'myApp.models.game',
		'myApp.models.die',

		//services
		'myApp.services.game'

	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]).
	constant('_',window._);
});
