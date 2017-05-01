import template from './flight-list.component.html';
import controller from './flight-list.controller';
import './flight-list.component.scss';

const FlightListComponent = {
  bindings: {
    flightList: '<',
  },
  template,
  controller
};

export default FlightListComponent;

