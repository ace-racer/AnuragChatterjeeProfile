angular.module('profileApp')
    .factory('dataSvc', ['$http', function ($http) {
        return {
            getHighlights: function () {
                return $http.get("../../ProfileData/highlights.json");
            },
            getSections: function () {
                return $http.get("../../ProfileData/sections.json");
            },
            getOtherProfiles: function () {
                return $http.get("../../ProfileData/links.json");
            }
        }
    }]);