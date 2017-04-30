import template from './select.component.html';
import controller from './select.controller';

const SelectComponent = {
  bindings: {
    onChange: '&',
    options: '<',
    model: '<',
    defaultOption: '@',
  },
  template,
  controller
};

export default SelectComponent;
