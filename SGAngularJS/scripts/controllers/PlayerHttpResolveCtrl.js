angular.module('MyApp.controllers')
    .controller('PlayerHttpResolveCtrl',['$scope', 'PlayerHttpServiceResolvePromise',
        function ($scope, PlayerHttpServiceResolvePromise) {
            'use strict';
            var promise = PlayerHttpServiceResolvePromise.getPlayers();
            
            promise.then(function(players) {
                $scope.players=players
            }).catch(function(reason){
                alert(reason);
            }).finally(function(){
                console.log('Inside Finally');
            })
         }]);
