import template from './airport-selector.component.html';
import controller from './airport-selector.controller';

const AirportSelectorComponent = {
  bindings: {
    selectedAirport: '<'
  },
  template,
  controller
};

export default AirportSelectorComponent;