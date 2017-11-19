angular.module('profileApp')
    .controller('basicProfileDetailsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.firstName = "Anurag";
        $scope.lastName = "Chatterjee";
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
        $scope.currentYear = new Date().getFullYear();
        $scope.sectionDetails = [];

        dataSvc.getSections().then(function (res) {
            if (res) {
                $scope.sectionDetails = res.data;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the sections file");
        });

        $scope.highlights = [];

        dataSvc.getHighlights().then(function (res) {
            if (res) {
                var highlightsContents = res.data;
                $scope.profileImageUrl = highlightsContents.profile_image;
                $scope.information = highlightsContents.information;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the sections file");
        });

    }]);