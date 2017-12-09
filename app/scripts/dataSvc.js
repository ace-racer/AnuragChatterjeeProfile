angular.module('profileApp')
    .factory('dataSvc', ['$http', function ($http) {
        return {
            getHighlights: function () {
                return $http.get("ProfileData/highlights.json");
            },
            getGeneralDetails: function () {
                return $http.get("ProfileData/generaldetails.json");
            },
            getOtherProfiles: function () {
                return $http.get("ProfileData/links.json");
            },
            getProjects: function () {
                return $http.get("ProfileData/projects.json");
            },
            getOtherActivities: function () {
                return $http.get("ProfileData/otheractivities.json");
            },
            getCommunityTools: function () {
                return $http.get("ProfileData/communitytools.json");
            }
        }
    }]);