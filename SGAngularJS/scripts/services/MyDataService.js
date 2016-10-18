//Factory Method
//angular.module('MyApp.services')
//    .factory('MyDataService',[
//        function () {
//            'use strict';
//            var names=['Name1','Name2','Name3'];
//            var addName=function(name){
//                names.push(name);
//            }
//            var removeName=function(index){
//                names.splice(index,1);
//            }
//            var getNames=function(){
//                return names;
//            }
//            //Closure
//            //Expose private members 
//            //For Factory Closure is mandatory.
//            return{
//                addName:addName,
//                removeName:removeName,
//                getNames:getNames
//            }
//            
//         }]);

//Service Method
//angular.module('MyApp.services')
//    .service('MyDataService',[
//        function () {
//            'use strict';
//            //if we use var it is local to the funciton,
//            //hence not accessible
//            this.names=['Name1','Name2','Name3'];
//            this.addName=function(name){
//                this.names.push(name);
//            }
//            this.removeName=function(index){
//                this.names.splice(index,1);
//            }
//            this.getNames=function(){
//                return this.names;
//            }
//            //Closure
//            //Expose private members 
//            //For Factory Closure is mandatory.
//            return{
//                addName:addName,
//                removeName:removeName,
//                getNames:getNames
//            }
            
//         }]);

//Provider Method
angular.module('MyApp.services')
    .provider('MyDataService',[
        function () {
            'use strict';
            //--In Provider $get is needed and the function
            //--needs to be assigned to it.
            this.$get=function() {
                var names=['Name1','Name2','Name3'];
                
                var addName=function(name){
                    this.names.push(name);
                }
                
                var removeName=function(index){
                    this.names.splice(index,1);
                }
                
                var getNames=function(){
                    return this.names;
                }    
                //--Closure
                //--Expose private members 
                //--For Factory Closure is mandatory.
                return {
                    addName:addName,
                    removeName:removeName,
                    getNames:getNames
                };
            }
}]);
