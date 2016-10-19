//angular.module('MyApp.controllers')
//	.controller('PlayersCtrl', ['$scope', 'Player',
//        function ($scope, Player) {
//			'use strict';
//			//$scope.players = PlayerRestService.query();
//
//			Player.query().$promise.then(function (PlayerResponse) {
//				$scope.players = PlayerResponse
//			}).catch(function (reason) {
//				alert("Reason " + reason)
//			});
//			$scope.deletePlayer = function (player) {
//				console.log(player)
//					//var player = this.row.entity;
//
//				player.$delete(function () {
//					$window.location.href = '';
//				})
//			}
//
//         }]);

angular.module('MyApp.controllers')
	.controller('PlayersCtrl', ['$scope', '$window', 'players',
        function ($scope, $window, players) {


			'use strict';

			$scope.players = players;
			$scope.gridOptions = {
				data: 'players',
				columnDefs: [{
						field: 'name',
						displayName: 'Name'
				},
					{
						field: 'debutYear',
						displayName: 'Debut Year'
				},
					{
						displayName: 'Actions',
						cellTemplate: '<div class="grid-action-cell">' +
							'<a class="btn btn-primary"' +
							'ui-sref="playerDetails({id:row.getProperty(\'_id\')})' +
							'">View</a>' +
							'<a ng-click="$event.stopPropagation();deletePlayer(row.entity);' +
							'"href="#""' +
							'">Delete</a></div>'
				}
				]
			};

			$scope.deletePlayer = function (player) {

				console.log(player)
					//var player = this.row.entity;

				player.$delete(function () {
					$window.location.href = '';
				})

			}




			//$scope.players = players;



	}]);

//angular.module('MyApp.controllers')
//	.controller('PlayersCtrl', ['$scope', '$window', 'Player',
//        function ($scope, $window, Player) {
//			'use strict';
//
//
//			Player.query().$promise.then(function (PlayerResponse) {
//				$scope.players = PlayerResponse
//			});
//
//			$scope.deletePlayer = function (player) {
//				player.$delete(function () {
//					$window.location.href = '';
//				})
//			}
//         }]);