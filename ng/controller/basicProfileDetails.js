var app = angular.module('profileApp', []);
app.controller('basicProfileDetailsCtrl', function ($scope, $http, $timeout) {
    $scope.firstName = "Anurag";
    $scope.lastName = "Chatterjee";
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
    $scope.currentYear = new Date().getFullYear();
    $scope.sectionDetails = [];

    $http.get('../../ProfileData/sections.json').then(function (res) {
        if (res) {
            $scope.sectionDetails = res.data;
        } else {
            console.log("There was no response while getting the JSON")
        }
    }).catch(function (data) {
        console.log("An error occurred while trying to find the sections file");
    });    
});