angular.module('profileApp')
    .controller('projectsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.allProjectDetails = [];

        dataSvc.getProjects().then(function (res) {
            if (res) {
                var projectDetailsObj = res.data;
                var projectDetails = projectDetailsObj.details;
                for (var itr = 0; itr < projectDetails.length; itr++) {
                    projectDetails[itr].monthName = $scope.getMonthNameFromNumber(projectDetails[itr].month);
                }

                $scope.projectDetails = projectDetailsObj.details;
                for (var itr = 0; itr < projectDetails.length; itr++) {
                    $scope.allProjectDetails.push(projectDetails[itr]);
                }
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
            if (monthNumber > 0 && monthNumber < 13) {
                // array Index starts from 0
                var arrayIndex = monthNumber - 1;
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return monthNames[arrayIndex];
            }
        }

        /*
         Get the projects with the provided text
         */
        $scope.searchItemWithText = function () {
            debugger;
            text = $scope.filterText;
            var minimumCharactersForSearch = 1;
            if (text && text.length > minimumCharactersForSearch) {
                var projectDetails = $scope.allProjectDetails;
                var projectDetailsToShow = [];

                // for each project details
                for (var itr = 0; itr < projectDetails.length; itr++) {
                    // for each tag in the project details
                    for (var jtr = 0; jtr < projectDetails[itr].tags.length; jtr++) {
                        var textLower = text.toLowerCase();
                        var tagItemLower = projectDetails[itr].tags[jtr].toLowerCase();

                        // if a portion of any tag matches the text in case ignorant search
                        if(tagItemLower.indexOf(textLower) >= 0)
                        {
                            // Add the item only once
                            projectDetailsToShow.push(projectDetails[itr]);
                            break;
                        }
                    }
                }
            } else {
                // add all items if there is no search text
                projectDetailsToShow = $scope.allProjectDetails;
            }

            $scope.projectDetails = projectDetailsToShow;
        }

    }]);