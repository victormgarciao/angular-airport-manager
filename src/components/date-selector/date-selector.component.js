import template from './date-selector.component.html';
import controller from './date-selector.controller';

const DateSelectorComponent = {
  bindings: {
    date: '<',
    onChange: '&'
  },
  template,
  controller
};

export default DateSelectorComponent;
