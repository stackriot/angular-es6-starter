import angular from 'angular';
import MainCtrl from './controllers/app.controller';
import MainService from './services/app.service';
import MainDirective from './directives/app.directive';

angular.module('app', [])

  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('mainDirective', MainDirective)

angular.bootstrap(document, ['app']);
