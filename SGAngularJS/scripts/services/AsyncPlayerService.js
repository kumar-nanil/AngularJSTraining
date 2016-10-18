angular.module('MyApp.services')
    .service('AsyncPlayerService',['$q','$timeout',
        function ($q, $timeout) {
            'use strict';
            
            var players=[
                {
                    name:"Sachin Tendulkar",
                    mentor: "Sunil Gavaskar",
                    birthDate: "20-02-1973",
                    friends: ["Dravid","Ganguly","Laxman"]
                },
                {
                    name:"Virat Kohli",
                    mentor: "Sachin",
                    birthDate: "20-02-1983",
                    friends: ["Raina","Ashwin","Dhoni","Anushka"]
                }
            ]
            var getPlayers=function() {
                var deferred = $q.defer();
                var flag=true;
                $timeout(function(){
                    if(flag) {
                        deferred.resolve(players);
                    }
                    else {
                        deferred.reject('Unable to Process')
                    }
                }, 3000)
                //Service will return a promise.
                return deferred.promise;
            }
            return {
                /*your code */
                getPlayers:getPlayers
            };
         }]);
