angular.module("app").config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/calculadora', { template: "<calculadora></calculadora>" });

    $routeProvider.when('/settings', { template: "<settings></settings>" });

    $routeProvider.otherwise({ redirectTo: "/calculadora" });
});