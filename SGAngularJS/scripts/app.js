angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters',
	'ui.router'
]).config(
	function ($stateProvider, $httpProvider) {
		'use strict';
		/*your code */
		$stateProvider.state('players', {
			url: '/players',
			templateUrl: 'scripts/partials/players.html',
			controller: 'PlayersCtrl',
            resolve: {
                Player: "Player",
                players: function (Player) {
                    return Player.query().$promise;
                }
            }
		}).state('playerDetails', {
			url: '/players/:id/view',
			templateUrl: 'scripts/partials/player-details.html',
			controller: 'PlayersDetailCtrl'
		}).state('addPlayer', {
			url: '/players/new',
			templateUrl: 'scripts/partials/player-add.html',
			controller: 'PlayersAddCtrl'
		}).state('updatePlayer', {
			url: '/players/:id/update',
			templateUrl: 'scripts/partials/player-update.html',
			controller: 'PlayersUpdateCtrl'
		})



	}
).run(
	function ($state) {
		'use strict';
		/*your code */
		$state.go('players')
	}
);
angular.module('MyApp.controllers', []);
angular.module('MyApp.services', ['ngResource']);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);