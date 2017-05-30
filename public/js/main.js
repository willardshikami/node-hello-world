var resourceApp = angular.module('resourceApp', ['ngRoute']);

resourceApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'ResourcesController',
        templateUrl: 'views/resources.html'
    });

    $routeProvider.when('/resources',{
        controller: 'ResourcesController',
        templateUrl: 'views/resources.html'
    });

    $routeProvider.when('/resources/details/:id',{
        controller: 'ResourcesController',
        templateUrl: 'views/resource_details.html'
    });
});