angular.module('profileApp')
    .controller('otherActivitiesCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.highlights = [];

        dataSvc.getOtherActivities().then(function (res) {
            if (res) {
                var otherActivitiesObj = res.data;
                $scope.otherActivitiesDetails = otherActivitiesObj.details;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the other activities file");
        });

    }]);