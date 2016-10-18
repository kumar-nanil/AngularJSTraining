angular.module('MyApp.controllers')
    .controller('SecondCtrl',['$scope','MyDataService',
        function ($scope, MyDataService) {
            'use strict';
            $scope.names=MyDataService.getNames();
            $scope.addName=function() {
                var name = prompt('Please enter a Name');
                if(name) {
                    MyDataService.addName(name);    
                }
            }
            $scope.removeName=function($index){
                var index = document.querySelector('#nameList').options.selectedIndex;
                if(index!=-1) {
                    MyDataService.removeName(index);
                }
            }
         }]);
