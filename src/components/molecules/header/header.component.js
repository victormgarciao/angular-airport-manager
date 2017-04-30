import template from './header.component.html';
import controller from './header.controller';

const HeaderComponent = {
  bindings: {
    caption: '@',
  },
  template,
  controller
};

export default HeaderComponent;

