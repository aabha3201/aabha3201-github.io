var app = angular.module('myApp', ['ngAnimate']);

app.controller('validateCtrl', function ($scope) {
    $scope.firstName = 'Aabha';
    $scope.lastName = 'Borle';
    $scope.email = 'aabha.borle@gmail.com';
    $scope.nums = [1,2,3,4,'5 Or More'];
    $scope.reject = !$scope.accept;
});
