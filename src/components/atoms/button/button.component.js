import template from './button.component.html';
import controller from './button.controller';

const ButtonComponent = {
  bindings: {
    caption: '@',
    classes: '@',
    isDisabled: '<',
    onClick: '&'
  },
  template,
  controller
};

export default ButtonComponent;
