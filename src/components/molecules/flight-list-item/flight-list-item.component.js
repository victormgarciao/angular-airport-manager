import template from './flight-list-item.component.html';
import './flight-list-item.component.scss';

const FlightListItemComponent = {
  bindings: {
    date: '@',
    time: '@',
    price: '@',
    currency: '@',
  },
  template,
};

export default FlightListItemComponent;

