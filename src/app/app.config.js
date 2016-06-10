AppConfig.$inject = ['$routeProvider']

export default function AppConfig($routeProvider) {

	$routeProvider
	.when('/', {
		title: 'Main View',
		template: require('./app.html')
	}).otherwise('/');

}
