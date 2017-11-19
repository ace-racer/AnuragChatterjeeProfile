var app = angular.module('profileApp', []);
app.controller('basicProfileDetailsCtrl', function ($scope, $http) {
    $scope.firstName = "Anurag";
    $scope.lastName = "Chatterjee";
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
    $scope.currentYear = new Date().getFullYear();       
    $http.get('../../ProfileData/sections.json').then(function (res) {
        debugger;
        $scope.sectionDetails = res.data;
        $scope.$watch('sectionDetails');
        //$timeout(function () {
            
        //})
        //if (res) {
        //    //$timeout(function () {
        //    //    debugger;
        //    //    $scope.sectionDetails = res.data;
        //    //}, 1000)
        //    debugger;
        //    $scope.sectionDetails = res.data;
        //    //                $scope.$apply();
        //} else {
        //    console.log("There is no response received");
        //}
    }).catch(function (data) {
        console.log("An error occurred while trying to find the sections file");
    });   
});