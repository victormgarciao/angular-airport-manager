import template from './flight-list-selector.component.html';
import controller from './flight-list-selector.controller';

const FlightListSelectorComponent = {
  bindings: {
    flightList: '<',
    outAirport: '<',
    backAirport: '<',
    startDate: '<',
    onChange: '&'
  },
  template,
  controller
};

export default FlightListSelectorComponent;

