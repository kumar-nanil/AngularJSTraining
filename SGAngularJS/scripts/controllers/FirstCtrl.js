angular.module('MyApp.controllers').controller('FirstCtrl',['$scope', '$interval',
            function ($scope, $interval) {
            $scope.model={
                now:new Date()
            }
            
            var update = function() {
                $scope.model.now=new Date();
            }
            
//            setInterval(function() {
//                $scope.$apply(update);
//            },1000);
            
            $interval(function() {
                update();
            },1000);
    
//            $scope.$watch("model.now",function(newValue, oldValue){
//                console.log("Old " + oldValue + " New " + newValue)
//            })
}]);