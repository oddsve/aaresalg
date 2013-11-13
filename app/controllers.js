var aaresalgApp = angular.module('AaresalgApp', []);

aaresalgApp.controller('SettingsController', function SettingsController($scope) {
    $scope.settings = [
        {'size': 100 },
        {'size': 200 },
        {'size': 300 },
        {'size': 400 }
    ];
});