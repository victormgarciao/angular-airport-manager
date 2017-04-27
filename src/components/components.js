import angular from 'angular';
import DateWrapperComponent from './date-wrapper/date-wrapper.component';
import DateSelectorComponent from './date-selector/date-selector.component';
import AirportSelectorComponent from './airport-selector/airport-selector.component';

export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('airportSelector', AirportSelectorComponent)
.name;
