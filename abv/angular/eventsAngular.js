var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var technologies = [
      { name: "Javascript", likes: 0, dislikes: 0 },
      { name: "Mongodb", likes: 0, dislikes: 0 },
      { name: "Advance Javascript", likes: 0, dislikes: 0 },
      { name: "SQL", likes: 0, dislikes: 0 },
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
      technology.likes++;
    };

    $scope.incrementDislikes = function (technology) {
      technology.likes++;
    };
  });
