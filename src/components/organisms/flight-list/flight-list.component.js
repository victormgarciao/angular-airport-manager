import template from './flight-list.component.html';
import controller from './flight-list.controller';

const FlightListSelectorComponent = {
  bindings: {
    flightList: '<',
  },
  template,
  controller
};

export default FlightListSelectorComponent;

