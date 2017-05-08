angular.module('resourceApp', [])
    .controller('ResourceAppController', function ($scope, $http) {
        var resourceView = this;
        resourceView.loadResources = function () {
            $http({
                url: 'api/resources',
                method: 'GET'
            }).then(function (resources) {
                $scope.resources = resources.data;
            });
        };
    });