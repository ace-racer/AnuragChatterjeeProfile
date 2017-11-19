var app = angular.module('profileApp', []);
app.controller('basicProfileDetailsCtrl', function ($scope, $http) {
    $scope.firstName = "Anurag";
    $scope.lastName = "Chatterjee";
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
    $scope.currentYear = new Date().getFullYear();
    $scope.sectionDetailsResponse = null;   

    $http.get('../../ProfileData/sections.json').then(function (res) {
        debugger;
        $scope.sectionDetailsResponse = res.data;
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

    $scope.$watch('sectionDetailsResponse', function () {
        alert("value updated!! ");
        $scope.sectionDetails = $scope.sectionDetailsResponse;
    })

});