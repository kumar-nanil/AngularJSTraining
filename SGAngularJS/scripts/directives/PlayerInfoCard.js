angular.module('MyApp.directives')
//Convention is important, should start with a lowercase
    .directive('playerInfoCard',[
        function () {
            'use strict';
            //The below return is what is called as 
            //DDO - Directive Definition Object.
            return{
                restrict: 'E',
                templateUrl:'scripts/partials/playerCard.html',
                scope: {
                    player:'='//Equals because it is gone receive an object.
                },
                controller:function($scope){
                    $scope.clickMe=function(player) {
                        alert(player.birthDate);
                    }
                }
            };
         }]);
