var aaresalgApp = angular.module('AaresalgApp', []);

aaresalgApp.controller('SettingsController', function SettingsController($scope) {
    $scope.settings = [
        {'name':'Bok1','size': 1000 },
        {'name':'Bok2','size': 1000 },
        {'name':'Bok3','size': 1000 }
    ];

    $scope.addBok = function(){
        $scope.settings.push({});
    };

    $scope.removeBok = function(index){
        $scope.settings.splice(index,1);

    };

    $scope.trekningsliste = [
    ];


    $scope.trekk = function(){

        var boknummer = Math.floor( Math.random() * $scope.settings.length );
        var nummer = Math.floor( Math.random() * $scope.settings[boknummer].size ) + 1;


        $scope.trekning = {'bok':$scope.settings[boknummer].name, 'nummer':nummer}
        $scope.trekningsliste.push($scope.trekning);
    };

    $scope.restart = function(){
        $scope.trekningsliste= [];
        $scope.trekning = {};
    };

    $scope.skalSettingVises = "hidden";

    $scope.visSettings = function(){
        $scope.skalSettingVises = "";
    }

    $scope.lukkSettings = function(){
        $scope.skalSettingVises = "hidden";
    }


});


