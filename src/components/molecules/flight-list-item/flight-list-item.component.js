import template from './flight-list-item.component.html';

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

