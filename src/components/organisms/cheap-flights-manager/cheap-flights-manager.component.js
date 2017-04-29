import template from './cheap-flights-manager.component.html';
import controller from './cheap-flights-manager.controller';

const CheapFlightsManagerComponent = {
  bindings: {
    outAirport: '<',
    backAirport: '<',
    startDate: '<',
    endDate: '<',
  },
  template,
  controller
};

export default CheapFlightsManagerComponent;
