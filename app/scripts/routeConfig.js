var profileApp = angular.module('profileApp', ['ngRoute', 'ngSanitize'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider
           .when("/", {
               controller: "basicProfileDetailsCtrl",
               templateUrl: "/app/views/basicdetails.html",
           }).when("/highlights", {
               controller: "basicProfileDetailsCtrl",
               templateUrl: "/app/views/basicdetails.html"
           }).when("/links", {
               controller: "contactMeCtrl",
               templateUrl: "/app/views/otherprofiles.html"
           }).when("/projects", {
               controller: "projectsCtrl",
               templateUrl: "/app/views/projects.html"
           }).when("/other_activities", {
               controller: "otherActivitiesCtrl",
               templateUrl: "/app/views/otherActivities.html"
           }).when("/community_tools", {
               controller: "communityToolsCtrl",
               templateUrl: "/app/views/communityTools.html"
           })
    }]).run();