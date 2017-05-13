// create the module and name it
	var myApp = angular.module('myApp', ['ngRoute']);

	// routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller  : 'aboutController'
			})

			// route for the service page
			.when('/service', {
				templateUrl : 'partials/services.html',
				controller  : 'serviceController'
			})
            // route for the contact us page
			.when('/contact', {
				templateUrl : 'partials/contactus.html',
				controller  : 'contactusController'
			});
	
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.info = 'Welcome to Jeebendu Web solution';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.info = 'About Us';
	});

	myApp.controller('serviceController', function($scope) {
		$scope.info = 'Service';
	});
    myApp.controller('contactusController', function($scope) {
		$scope.info = 'Contact Us';
	});