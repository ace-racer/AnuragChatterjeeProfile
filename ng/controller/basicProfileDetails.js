var app = angular.module('profileApp', []);
app.controller('basicProfileDetailsCtrl', function ($scope) {
    $scope.firstName = "Anurag";
    $scope.lastName = "Chatterjee";
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
    $scope.currentYear = new Date().getFullYear();
});