angular.module('MyApp.services')
    .service('PlayerService',[
        function () {
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
            
            return {
                /*your code */
                getPlayers:players
            };
         }]);
