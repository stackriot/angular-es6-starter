HomeConfig.$inject = ['$routeProvider']

export default function HomeConfig($routeProvider) {

	$routeProvider
		.when('/home', {
			title: 'Home View',
			template: require('./home.html'),
			controller: 'HomeCtrl',
			controllerAs: 'home'
		})

}
