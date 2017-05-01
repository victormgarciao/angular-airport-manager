import moment from 'moment';
import round from 'lodash/round';

function FlightListController() {
  'ngInject';

  this.getDate = date => moment(date).format('DD/MM/YYYY');
  this.getTime = date => moment(date).format('hh:mm');
  this.roundPrice = price => round(price);
}

export default FlightListController;
