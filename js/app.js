var app = angular.module('app', ['ngRoute', 'appControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'partials/categories.html',
        controller: 'CategoryListCtrl'
      }).
      when('/categories/:categoryId', {
        templateUrl: 'partials/products.html',
        controller: 'CategoryCtrl'
      }).
       when('/categories/:categoryId/:productId', {
        templateUrl: 'partials/details.html',
        controller: 'ProductCtrl'
      }).
      otherwise({
        redirectTo: '/categories'
      });
  }]);