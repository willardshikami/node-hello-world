var resourceApp = angular.module('resourceApp', ['ngRoute']);

resourceApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'ResourceAppController',
        templateUrl: 'views/resources.html'
    });

    $routeProvider.when('/resources',{
        controller: 'ResourceAppController',
        templateUrl: 'views/resources.html'
    });

    $routeProvider.when('/resources/details/:id',{
        controller: 'ResourceAppController',
        templateUrl: 'views/resource_detail.html'
    });

});