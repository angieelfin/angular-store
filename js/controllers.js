var appControllers = angular.module('appControllers', []);

appControllers.controller('CategoryListCtrl',['$scope', '$http', function($scope, $http) {
  $http.get('categories.json').success(function(data) {
    $scope.categories = data;
  });
}]);

appControllers.controller('CategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.categoryId = $routeParams.categoryId;
  $scope.categoryName = $routeParams.categoryName;
  $http.get('/categories-data/' + $routeParams.categoryId + '.json').success(function(data) {
    $scope.products = data;
  });
  $scope.orderProp = 'age';
}]);

appControllers.controller('ProductCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){
  $scope.productId = $routeParams.productId;
  $http.get('/details-data/'+ $routeParams.productId +'.json').success(function(data) {
    $scope.detail = data;
  });
}]);
