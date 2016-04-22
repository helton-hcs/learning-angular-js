(function() {

  var RepoController = function($scope, $routeParams, github) {

    var onRepoComplete = function(data) {
      $scope.repo = data;
    };
    
    var onError = function(reason) {
      $scope.error = reason;
    };

    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    github.getRepoDetails(username, reponame)
          .then(onRepoComplete, onError);

  };

  var app = angular.module("githubViewer");
  app.controller("RepoController", RepoController);

})();