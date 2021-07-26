angular.module('toolDemo', ['ui.bootstrap'])
.controller('demoCtrl', function($scope) {
    $scope.showStatus = true;
    $scope.switchStatus = 0;
    $scope.ifValue = true;
    $scope.showIf = function() {
      return $scope.ifValue;
    };
    $scope.hideIf = function() {
      return !$scope.ifValue;
    };
  
    $scope.increment = function() {
      $scope.switchStatus = ($scope.switchStatus === 0) ? 1 : 0;
    }
  });