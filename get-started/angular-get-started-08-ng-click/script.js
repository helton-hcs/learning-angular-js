(function() {
  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $scope.error = null;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };

    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };    

    $scope.username = "angular";
    $scope.message = "GitHub Viewer";

  };
  
  var app = angular.module("githubViewer", []);
  app.controller("MainController", MainController);

})();