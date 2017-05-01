import template from './flight-list-item.component.html';
import controller from './flight-list-item.controller';
import './flight-list-item.component.scss';

const FlightListItemComponent = {
  bindings: {
    date: '@',
    time: '@',
    price: '@',
    currency: '@',
    click: '&'
  },
  template,
  controller
};

export default FlightListItemComponent;
