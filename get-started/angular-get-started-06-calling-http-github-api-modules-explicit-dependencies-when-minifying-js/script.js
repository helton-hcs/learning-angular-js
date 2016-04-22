(function() {
  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };

    $http.get("https://api.github.com/users/torvalds")
      .then(onUserComplete, onError);

    $scope.message = "Hello, Angular!";

  };
  
  var app = angular.module("githubViewer", []);
  app.controller("MainController", ["$scope", "$http", MainController]); //specifying explicit dependencies when minifying js (otherwise it could break when variables are renamed on minifying process)

})();