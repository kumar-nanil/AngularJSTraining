angular.module('MyApp.directives')
    .directive('playerAnimation',[
        function () {
            'use strict';
            return{
                restrict: 'A',
                //Here we can have scope, element and attr.
                //These are already injected
                //If Jquery is loaded first the element is an Jquery element.
                //Else if Angular is loaded first it becomes JQlite element.
                //In the below example if Angular is loaded first, we get an
                //error as "element.hover is not an funtion"
                 link: function (scope, element,attr) {
                    element.hover(function() {
                        $(this).transition({
                            scale:1.1
                        })
                    }, function() {
                        $(this).transition({
                            scale:1
                        })
                    })
                }
            };
         }]);
