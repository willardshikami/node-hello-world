angular.module('resourceApp')
	resourceApp.controller('ResourcesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
		console.log('ResourcesController loaded...')

		//display books
			$scope.getResources = function(){
				$http.get('/api/resources')
				.then(function(response){
					$scope.resources = response.data;
				});
			}

			//display single book
			$scope.getResource = function(){
				var id = $routeParams.id
				$http.get('/api/resources/'+id)
				.then(function(response){
					$scope.resource = response.data;
				});
			}

			//add resource
			$scope.addResource = function(){
				console.log($scope.book);
				$http.post('/api/resources', $scope.resource)
				.then(function(response){
					window.location.href='#!/resources'
				});
			}
	}]);