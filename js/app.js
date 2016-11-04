var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ngCsv"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./templates/home.html"
    }).when("/sales", {
        controller: 'SalesController',
        templateUrl: "./templates/sales.html"
    }).when("/sales/:saleId", {
        controller: 'SalesController',
        templateUrl: "./templates/sales.html"
    }).when("/products", {
        controller: 'ProductController',
        templateUrl: "./templates/products.html"
    }).when("/reports", {
        controller: 'ReportController',
        templateUrl: "./templates/reports.html"
    }).when("/faq", {
        templateUrl: "./templates/faq.html"
    }).when("/predictions", {
        controller: 'PredictionController',
        templateUrl: "./templates/predictions.html"
    })
});
