var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      { firstName: "Dileep", lastName: "Singh", gender: "Male", salary: 35000 },
      { firstName: "Ajay", lastName: "Singh", gender: "Male", salary: 36000 },
      { firstName: "Sunil", lastName: "Singh", gender: "Male", salary: 37000 },
      {
        firstName: "Rishi",
        lastName: "Kalawatia",
        gender: "Male",
        salary: 38000,
      },
      {
        firstName: "Risabh",
        lastName: "Kalawatia",
        gender: "Male",
        salary: 39000,
      },
    ];

    $scope.employees = employees;
  });
