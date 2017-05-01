import template from './airport-selector.component.html';
import controller from './airport-selector.controller';

const AirportSelectorComponent = {
  bindings: {
    airports: '<',
    label: '@',
    onChange: '&'
  },
  template,
  controller
};

export default AirportSelectorComponent;
