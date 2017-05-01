import template from './header.component.html';
import './header.component.scss';

const HeaderComponent = {
  bindings: {
    caption: '@',
  },
  template,
};

export default HeaderComponent;

