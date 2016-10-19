angular.module('MyApp.services')
    .service('Player',['$resource',
        function ($resource) {
            'use strict';
            return $resource('http://localhost:9999/service/players/:id', {
                player_id: '@_id'
                
            }, {
                'update': {
                    method:'PUT'
                }
            })
            
         }]);
