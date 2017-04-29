import isNil from 'lodash/isNil';
import moment from 'moment';

function CheapFlightsManagerController(CheapFlightService) {
  'ngInject';

  const isAvailableToSearch = () => {
    if (
      !isNil(this.outAirport)
      && !isNil(this.backAirport)
      && !isNil(this.startDate)
      && !isNil(this.endDate)
    ) {
      return true;
    }
    return false;
  };

  const formatDate = date => moment(date).format('YYYY-MM-DD');

  const getFlights = () => {
    const flightData = {
      startDate: this.startDate,
      endDate: this.endDate,
      outAirportCode: this.outAirport.iataCode,
      backAirportCode: this.backAirport.iataCode,
    };

    CheapFlightService.getFlightsList(flightData).then(
      (response) => {
        this.flightList = response;
        console.log('flights', this.flightList);
      }
    );
  };

  this.changeOutAirport = (event) => {
    this.outAirport = event.selectedAirport;
    console.log('outAirport', this.outAirport);
  };

  this.changeBackAirport = (event) => {
    this.backAirport = event.selectedAirport;
    console.log('backAirport', this.backAirport);
  };

  this.changeStartDate = (event) => {
    this.startDate = formatDate(event.date);
    console.log('startDate', this.startDate);
    if (moment(event.date) > moment(this.endDate)) {
      this.endDate = formatDate(
        moment(event.date).add(2, 'd').toDate()
      );
    }
  };

  this.changeEndDate = (event) => {
    this.endDate = formatDate(event.date);
    console.log('endDate', this.endDate);
    if (moment(event.date) < moment(this.startDate)) {
      this.startDate = formatDate(
        moment(event.date).subtract(2, 'd').toDate()
      );
    }
  };

  this.search = () => {
    if (isAvailableToSearch()) {
      getFlights();
    }
  };
}

export default CheapFlightsManagerController;
