import angular from 'angular';
import MainCtrl from './controllers/app.controller';
import MainService from './services/app.service';

angular.module('app', [])

  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)

angular.bootstrap(document, ['app']);
