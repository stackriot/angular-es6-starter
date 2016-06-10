import '../../index.html';
import '../../style.css';

import angular from 'angular';
import angularRoute from 'angular-route';
import AppConfig from './app.config';

import HomeModule from './components/home/home.module';
import MainCtrl from './controllers/app.controller';
import MainService from './services/app.service';
import MainDirective from './directives/app.directive';

let app = angular.module('app', [angularRoute, HomeModule.name])

  .config(AppConfig)
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('mainDirective', MainDirective)

angular.bootstrap(document, ['app']);
