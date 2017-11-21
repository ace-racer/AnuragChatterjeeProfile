angular.module('profileApp')
    .controller('projectsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.highlights = [];

        dataSvc.getProjects().then(function (res) {
            if (res) {
                var projectDetailsObj = res.data;
                $scope.projectDetails = projectDetailsObj.details;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the project details file");
        });

    }]);