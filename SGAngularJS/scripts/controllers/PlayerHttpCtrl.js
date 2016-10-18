angular.module('MyApp.controllers')
    .controller('PlayerHttpCtrl',['$scope', 'PlayerHttpService',
        function ($scope, PlayerHttpService) {
            'use strict';
//            $scope.players=PlayerHttpService.getPlayers();
            
            var promise = PlayerHttpService.getPlayers();
            
            promise.then(function(players) {
                $scope.players=players
            }).catch(function(reason){
                alert(reason);
            }).finally(function(){
                console.log('Inside Finally');
            })
}]);