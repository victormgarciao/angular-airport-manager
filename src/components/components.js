import angular from 'angular';

import DateSelectorComponent from './atoms/date-selector/date-selector.component';
import ButtonComponent from './atoms/button/button.component';

import AirportSelectorComponent from './molecules/airport-selector/airport-selector.component';
import FlightListItem from './molecules/flight-list-item/flight-list-item.component';
import FlightListEmptyItem from './molecules/flight-list-empty-item/flight-list-empty-item.component';

import FlightListComponent from './organisms/flight-list/flight-list.component';
import CheapFlightsManagerComponent from './organisms/cheap-flights-manager/cheap-flights-manager.component';

export default angular.module('app.components', [])
.component('dateSelector', DateSelectorComponent)
.component('buttonComponent', ButtonComponent)

.component('airportSelector', AirportSelectorComponent)
.component('flightListItem', FlightListItem)
.component('flightListEmptyItem', FlightListEmptyItem)

.component('flightList', FlightListComponent)
.component('cheapFlightsManager', CheapFlightsManagerComponent)
.name;
