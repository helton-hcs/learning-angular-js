angular.module("app", []).controller("MainController", function($scope, $http) {

  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = "Could not fetch the user";
  };

  $http.get("https://api.github.com/users/torvalds")
    .then(onUserComplete, onError);

  $scope.message = "Hello, Angular!";

});