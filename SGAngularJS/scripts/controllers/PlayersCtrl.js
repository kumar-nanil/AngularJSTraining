//angular.module('MyApp.controllers')
//    .controller('PlayersCtrl',['$scope', 'Player',
//        function ($scope, Player) {
//            'use strict';
//            Player.query().$promise.then(function(PlayerResponse) {
//                $scope.players = PlayerResponse}).catch(function(reason) {
//                alert("Reason " + reason)
//            });
//         }]);

angular.module('MyApp.controllers')
    .controller('PlayersCtrl',['$scope', 'players',
        function ($scope, players) {
            'use strict';
            $scope.players=players;    
         }]);
