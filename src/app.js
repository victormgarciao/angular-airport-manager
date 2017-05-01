import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AirportSelectorController from './components/molecules/airport-selector/airport-selector.controller';
import CheapFlightsManagerController from
'./components/organisms/cheap-flights-manager/cheap-flights-manager.controller';
import HomeComponent from './home/home.component';
import {
  CheapFlightService,
  AirportsService,
} from './services';

AirportsService.$inject = ['$http'];
CheapFlightService.$inject = ['$http'];

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
.controller(
  'CheapFlightsManagerController',
  ['CheapFlightService', CheapFlightsManagerController]
)
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      templateUrl: './home/home.component.html'
    })
      .state('home.cheapFlightList', {
        url: '/cheapFlightList',
        templateUrl: './components/organisms/flight-list/flight-list.component.html',
        controllerUrl: './components/organisms/flight-list/flight-list.controller.js'
      })
  ;
});
