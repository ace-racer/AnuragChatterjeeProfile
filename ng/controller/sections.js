var app = angular.module('profileApp', []);
app.controller('sectionsCtrl', function ($scope, $http) {
    $http.get('../../ProfileData/sections.json').then(function (res) {
        if (res) {
            $scope.sectionDetails = res.data;
        } else {
            console.log("There is no response received");
        }
    }).catch(function (data) {
        console.log("An error occurred while trying to find the sections file");
    });
});