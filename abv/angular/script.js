var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
  var employee = {
    firstName: "Dileep",
    lastName: "Singh",
    gender: "Male",
  };
  $scope.employee = employee;
});
