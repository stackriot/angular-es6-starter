import angular from 'angular';
import HomeConfig from './home.route'
import HomeCtrl from './controllers/home.controller'

let HomeModule = angular.module('app.home', [])

	.config(HomeConfig)
	.controller('HomeCtrl', HomeCtrl)

export default HomeModule;
