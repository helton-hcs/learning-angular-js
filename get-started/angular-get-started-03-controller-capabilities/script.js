angular.module("app", []).controller("MainController", function($scope) {

  $scope.message = "Hello, Angular!";

  $scope.person = {
    firstName: "Helton",
    lastName: "Souza",
    imageSrc: "https://avatars.githubusercontent.com/u/3588665?v=3"
  };

});