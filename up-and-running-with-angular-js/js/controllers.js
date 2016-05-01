(function () {
    var artistControllers = angular.module('artistControllers', ['ngAnimate']);

    artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
        $http.get('js/data.json')
            .success(function (data) {
                $scope.artists = data;
                $scope.artistOrder = 'name';
            });
    }]);

    artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('js/data.json')
            .success(function (data) {
                $scope.artists = data;
                $scope.whichItem = Number($routeParams.itemId);
                $scope.prevItem = $scope.whichItem === 0 ? ($scope.artists.length - 1) : ($scope.whichItem - 1);
                $scope.nextItem = $scope.whichItem === ($scope.artists.length - 1) ? 0 : ($scope.whichItem + 1);
            });
    }]);
})();