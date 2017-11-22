angular.module('profileApp')
    .controller('projectsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.highlights = [];

        dataSvc.getProjects().then(function (res) {
            if (res) {
                var projectDetailsObj = res.data;
                var projectDetails = projectDetailsObj.details;
                for (var itr = 0; itr < projectDetails.length; itr++) {
                    projectDetails[itr].monthName = $scope.getMonthNameFromNumber(projectDetails[itr].month);
                }

                $scope.projectDetails = projectDetailsObj.details;
            } else {
                console.log("There was no response while getting the JSON")
            }
        }).catch(function (data) {
            console.log("An error occurred while trying to find the project details file");
        });

        /*
            Get the month name from the month number         
         */
        $scope.getMonthNameFromNumber = function (monthNumber) {            
            if (monthNumber > 0 && monthNumber < 13)
            {
                // array Index starts from 0
                var arrayIndex = monthNumber - 1;
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return monthNames[arrayIndex];
            }
        }

    }]);