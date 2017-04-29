import angular from 'angular';

import DateSelectorComponent from './atoms/date-selector/date-selector.component';

import AirportSelectorComponent from './molecules/airport-selector/airport-selector.component';

import FlightListSelectorComponent from './organisms/flight-list-selector/flight-list-selector.component';
import CheapFlightsManagerComponent from './organisms/cheap-flights-manager/cheap-flights-manager.component';

export default angular.module('app.components', [])
.component('dateSelector', DateSelectorComponent)
.component('airportSelector', AirportSelectorComponent)
.component('flightListSelector', FlightListSelectorComponent)
.component('cheapFlightsManager', CheapFlightsManagerComponent)
.name;
