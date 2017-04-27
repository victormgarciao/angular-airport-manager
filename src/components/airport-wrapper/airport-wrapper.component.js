import template from './airport-wrapper.component.html';
import controller from './airport-wrapper.controller';

const AirportWrapperComponent = {
  bindings: {
    outAirport: '<',
    backAirport: '<'
  },
  template,
  controller
};

export default AirportWrapperComponent;
