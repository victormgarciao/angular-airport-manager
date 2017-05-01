import template from './flight-selected.component.html';
import './flight-selected.component.scss';

const FlightSelectedItemComponent = {
  bindings: {
    date: '@',
    time: '@',
    price: '@',
    currency: '@'
  },
  template,
};

export default FlightSelectedItemComponent;

