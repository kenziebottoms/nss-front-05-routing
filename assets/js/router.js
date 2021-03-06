"use strict";

const angular = require("angular");

angular.module("RouteApp").config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/js/partials/listing.html",
            controller: "ListCtrl"
        })
        .when("/furka-pass", {
            templateUrl: "assets/js/partials/hwy.html",
            controller: "FurkaPassCtrl"
        })
        .when("/atlantic-road", {
            templateUrl: "assets/js/partials/hwy.html",
            controller: "AtlanticRdCtrl"
        })
        .otherwise("/");
});