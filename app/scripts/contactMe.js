angular.module('profileApp')
    .controller('contactMeCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {       
        $scope.highlights = [];

        dataSvc.getOtherProfiles().then(function (res) {
            if (res) {
                var otherProfileDetailsObj = res.data;
                $scope.otherProfileDetails = otherProfileDetailsObj.details;               
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the links file");
        });

    }]);