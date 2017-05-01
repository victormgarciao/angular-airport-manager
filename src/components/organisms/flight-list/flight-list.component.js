import template from './flight-list.component.html';
import './flight-list.component.scss';

const FlightListComponent = {
  bindings: {
    flightList: '<',
  },
  template,
};

export default FlightListComponent;

