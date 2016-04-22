(function() {
  var MainController = function($scope, $http, $interval) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);    
      $scope.error = null;
    };
    
    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    var decrementCountdown = function() {
      $scope.countdown--;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };
    
    var startCountdown = function() {
      $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };    

    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count"; // "-" will assure descending order
    $scope.countdown = 5;
    startCountdown();
  };
  
  var app = angular.module("githubViewer", []);
  app.controller("MainController", MainController);

})();