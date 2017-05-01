import template from './button.component.html';
import controller from './button.controller';
import './button.component.scss';

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
