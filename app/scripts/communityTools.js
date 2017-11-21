angular.module('profileApp')
    .controller('communityToolsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.highlights = [];

        dataSvc.getCommunityTools().then(function (res) {
            if (res) {
                var communityToolsObj = res.data;
                $scope.communityToolsDetails = communityToolsObj.details;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the community tools file");
        });

    }]);