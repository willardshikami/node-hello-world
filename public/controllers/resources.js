angular.module('resourceApp', [])
	.controller('ResourceAppController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
		console.log('ResourceAppController loaded...')

		//display books
			$scope.getResources = function(){
				$http.get('/api/resources')
				.then(function(response){
					$scope.resources = response.data;
				});
			}

			//display single book
			$scope.getResource = function(){
				$http.get('/api/resources/'+id)
				.then(function(response){
					$scope.resource = response.data;
				});
			}
	}]);