angular.module('MyApp.controllers')
    .controller('RestCtrl',['RestService',
        function (RestService) {
            'use strict';
            console.log(RestService.get({"resource_id":1}));
            console.log(RestService.query());
            
         }]);
