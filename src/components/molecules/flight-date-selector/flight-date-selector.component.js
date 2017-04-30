import template from './flight-date-selector.component.html';
import controller from './flight-date-selector.controller';

const FlightDateSelectorComponent = {
  bindings: {
    date: '<',
    label: '@',
    onChange: '&'
  },
  template,
  controller
};

export default FlightDateSelectorComponent;