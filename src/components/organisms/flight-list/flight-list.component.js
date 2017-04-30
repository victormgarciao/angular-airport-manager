import template from './flight-list.component.html';
import controller from './flight-list.controller';

const FlightListComponent = {
  bindings: {
    flightList: '<',
  },
  template,
  controller
};

export default FlightListComponent;

