// defining the app module of the project
angular.module('movieDBApp', ['ngRoute','movieControllers','movieDBDirectives','movieDBServices'])

.config(function($routeProvider) {
		 
		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'HomeController'
			})
			.when('/musics', {
		  		templateUrl: 'templates/musics.html',
		  		controller: 'MovieListController'
		  	})
		  	.when('/videos', {
		  		templateUrl: 'templates/videos.html',
				controller: 'MovieVideosController'
		  	})
		  	
		  	.when("/schedule", {
				templateUrl: "templates/schedule.html",
				controller: "scheduleController"
			})
			.when("/script", {
				templateUrl: "templates/script.html",
				controller: "scriptController"
			})
		  	.when("/about", {
		  		templateUrl:'templates/about.html',
		  		controller: 'AboutController'
		  	})
	 		.when("/signup", {
		  		templateUrl: 'templates/signup.html',
				controller: 'SignupController'
		  	})		  	
		  	.when('/', {
		  		templateUrl: 'templates/home.html',
		  		controller: 'HomeController'
		  	}) 
		  	.otherwise({redirectTo: '/home'}); 
	});