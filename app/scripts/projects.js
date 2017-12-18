angular.module('profileApp')
    .controller('projectsCtrl', ['$scope', '$location', 'dataSvc', function ($scope, $location, dataSvc) {
        $scope.allProjectDetails = [];
        $scope.tagClasses = {};
        $scope.MAX_ITEMS_TO_SHOW = 50;
        $scope.ITEMS_PER_PAGE = 3;
        $scope.FIRST_PAGE_NUMBER = 1;

        // the current page that is shown
        $scope.currentPage = $scope.FIRST_PAGE_NUMBER;

        // the total number of pages that are required
        $scope.totalPagesRequired = [1];

        $scope.totalItemsToShow = $scope.MAX_ITEMS_TO_SHOW;
        $scope.itemsPerPage = $scope.ITEMS_PER_PAGE;

        dataSvc.getProjects().then(function (res) {
            if (res) {
                var projectDetailsObj = res.data;
                var projectDetails = projectDetailsObj.details;
                var numProjects = projectDetails.length;
                $scope.totalItemsToShow = Math.min($scope.MAX_ITEMS_TO_SHOW, numProjects);

                $scope.totalPagesRequired = $scope.getNumberOfPagesToShow(projectDetails);

                // populate the month name from the month number
                for (var itr = 0; itr < numProjects; itr++) {
                    projectDetails[itr].monthName = $scope.getMonthNameFromNumber(projectDetails[itr].month);
                }

                // populate all project details master array
                for (var itr = 0; itr < numProjects; itr++) {
                    $scope.allProjectDetails.push(projectDetails[itr]);
                }

                // Bind the project details to the view
                var projectDetailsForPage = $scope.getItemsToShowOnPage($scope.allProjectDetails, $scope.currentPage);
                $scope.projectDetails = projectDetailsForPage;
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
        $scope.searchItemWithText = function (pageNumber) {
            if(!pageNumber)
            {
                pageNumber = $scope.FIRST_PAGE_NUMBER;
            }

            text = $scope.filterText;
            $scope.tagClasses = {};
            var minimumCharactersForSearch = 1;
            if (text && text.length > minimumCharactersForSearch) {                
                var projectDetails = $scope.allProjectDetails;
                var projectDetailsToShow = [];

                // for each project details
                for (var itr = 0; itr < projectDetails.length; itr++) {

                    var shouldAddProject = true;

                    // for each tag in the project details
                    for (var jtr = 0; jtr < projectDetails[itr].tags.length; jtr++) {
                        var textLower = text.toLowerCase();
                        var tagItemLower = projectDetails[itr].tags[jtr].toLowerCase();

                        // if a portion of any tag matches the text in case ignorant search
                        if (tagItemLower.indexOf(textLower) >= 0) {
                            // Add the item only once
                            if (shouldAddProject) {
                                projectDetailsToShow.push(projectDetails[itr]);
                                shouldAddProject = false;
                            }

                            // Add class for the Tag Span
                            if ($scope.tagClasses[projectDetails[itr].tags[jtr]] == null) {
                                $scope.tagClasses[projectDetails[itr].tags[jtr]] = "tag-span-found";
                            }
                        }
                    }
                }
            } else {
                // add all items if there is no search text
                projectDetailsToShow = $scope.allProjectDetails;
            }

            $scope.projectDetails = $scope.getItemsToShowOnPage(projectDetailsToShow, pageNumber);
            $scope.totalPagesRequired = $scope.getNumberOfPagesToShow(projectDetailsToShow);
        }

        $scope.getTagClass = function (tagName) {
            if ($scope.tagClasses[tagName] != null) {
                return $scope.tagClasses[tagName];
            } else {
                return "tag-span";
            }
        }

        /*
           Get the items from the array to be shown given by the page number (1 indexed)
        */
        $scope.getItemsToShowOnPage = function (itemsForPagination, pageNumber) {
            if (itemsForPagination && pageNumber >= 1) {                
                var numItemsForPagination = itemsForPagination.length;
                var totalItemsToShow = Math.min($scope.MAX_ITEMS_TO_SHOW, numItemsForPagination);
                var startIndexForPage = (pageNumber - 1) * $scope.itemsPerPage;
                var excludedEndIndexForPage = Math.min(totalItemsToShow, pageNumber * $scope.itemsPerPage);
                return itemsForPagination.slice(startIndexForPage, excludedEndIndexForPage);
            }

            return null;
        }

        /*
         Get the contents for the pagination control as an array to show on the screen        
        */
        $scope.getNumberOfPagesToShow = function (itemsForPagination) {
            if (itemsForPagination) {
                var totalItemsForPagination = Math.min($scope.MAX_ITEMS_TO_SHOW, itemsForPagination.length);

                // number of pages with the full content
                var numPagesWithFullContent = totalItemsForPagination / $scope.itemsPerPage;

                // number of items in the last page
                var numItemsLastPage = totalItemsForPagination % $scope.itemsPerPage;

                // additional page to show remaining items not accomodated completely in the earlier pages
                var additionalPage = 0;
                if (numItemsLastPage != 0) {
                    additionalPage = 1;
                }

                var totalItems = numPagesWithFullContent + additionalPage;
                var pageNumbers = [];
                for (itr = 1; itr <= totalItems; itr++) {
                    pageNumbers.push(itr);
                }

                return pageNumbers;
            }

            return null;
        }

        $scope.setCurrentPage = function (pageNumber) {
            $scope.currentPage = pageNumber;
            $scope.searchItemWithText(pageNumber);
        }

        /*
          Get the class for the selected page in the list
        */
        $scope.getClassForSelectedPage = function(pageNumber){
            if(pageNumber == $scope.currentPage)
            {
                return "paginationControlListItemFound";
            }

            return "";
        }

    }]);