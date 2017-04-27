import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AirportSelectorController from './components/airport-selector/airport-selector.controller';
import { HomeComponent } from './home/home.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

AirportsService.$inject = ['$http'];

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.service('AirportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.controller(
  'AirportSelectorController',
  ['AirportsService', AirportSelectorController]
)
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    });
});
