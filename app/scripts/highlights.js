angular.module('profileApp')
    .controller('highlightsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {       
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