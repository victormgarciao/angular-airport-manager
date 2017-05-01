import angular from 'angular';

import DateSelector from './atoms/date-selector/date-selector.component';
import Button from './atoms/button/button.component';
import LevelItem from './atoms/level-item/level-item.component';
import Select from './atoms/select/select.component';
import Label from './atoms/label/label.component';

import AirportSelector from './molecules/airport-selector/airport-selector.component';
import FlightListItem from './molecules/flight-list-item/flight-list-item.component';
import FlightListEmptyItem from './molecules/flight-list-empty-item/flight-list-empty-item.component';
import FlightDateSelector from './molecules/flight-date-selector/flight-date-selector.component';
import FlightSelected from './molecules/flight-selected/flight-selected.component';
import Header from './molecules/header/header.component';

import FlightList from './organisms/flight-list/flight-list.component';
import CheapFlightsManager from './organisms/cheap-flights-manager/cheap-flights-manager.component';

export default angular.module('app.components', [])
.component('dateSelector', DateSelector)
.component('buttonComponent', Button)
.component('levelItem', LevelItem)
.component('selectComponent', Select)
.component('labelComponent', Label)

.component('airportSelector', AirportSelector)
.component('flightListItem', FlightListItem)
.component('flightListEmptyItem', FlightListEmptyItem)
.component('flightDateSelector', FlightDateSelector)
.component('flightSelected', FlightSelected)
.component('headerComponent', Header)

.component('flightList', FlightList)
.component('cheapFlightsManager', CheapFlightsManager)
.name;
