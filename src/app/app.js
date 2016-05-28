import angular from 'angular';
import {MainCtrl} from './controllers/app.controller';

angular.module('app', [])

  .controller('MainCtrl', MainCtrl);

angular.bootstrap(document, ['app']);
