var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ngCsv"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    }).when("/consulting", {
        //controller: 'ConsultController',
        templateUrl: "templates/consulting.html"
    }).when("/design", {
//        controller: 'DesignController',
        templateUrl: "templates/design.html"
    }).when("/hosting", {
//        controller: 'HostingController',
        templateUrl: "templates/hosting.html"
    }).when("/about", {
//        controller: 'AboutController',
        templateUrl: "templates/about.html"
    }).when("/contact", {
//        controller: 'ContactController'
        templateUrl: "templates/contact.html"
    }).when("/virtual", {
//        controller: 'VirtualController',
        templateUrl: "templates/virtual.html"
    })
});

//The default ng-max validation attribute with Angular doesn't allow you to bind to
//something in your Controller, this should fix it.
//From http://jsfiddle.net/g/s5gKC/ accessed 4/10/2016
app.directive('ngMax', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMax, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function(value) {
              var max = scope.$eval(attr.ngMax) || Infinity;
              if (!isEmpty(value) && value > max) {
                ctrl.$setValidity('ngMax', false);
                return undefined;
              } else {
                ctrl.$setValidity('ngMax', true);
                return value;
              }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };
});

app.filter('startFrom', function () {
    return function (data, start) {
        return data.slice(start);
    };
});
