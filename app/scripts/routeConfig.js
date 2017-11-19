var profileApp = angular.module('profileApp', ['ngRoute', 'ngSanitize'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider
           .when("/", {
               controller: "basicProfileDetailsCtrl",
               templateUrl: "/app/views/basicdetails.html",
           }).when("/highlights", {
               controller: "basicProfileDetailsCtrl",
               templateUrl: "/app/views/basicdetails.html"
           })
    }]).run();