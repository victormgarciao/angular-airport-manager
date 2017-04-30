import isNil from 'lodash/isNil';
import moment from 'moment';

function CheapFlightsManagerController(CheapFlightService) {
  'ngInject';

  this.isButtonDisabled = true;
  this.buttonLoadingClass = '';

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
    this.buttonLoadingClass = 'is-loading';
    const flightData = {
      startDate: formatDate(this.startDate),
      endDate: formatDate(this.endDate),
      outAirportCode: this.outAirport.iataCode,
      backAirportCode: this.backAirport.iataCode,
    };

    CheapFlightService.getFlightsList(flightData).then(
      (response) => {
        this.flightList = response;
        this.buttonLoadingClass = '';
        console.log('flights', this.flightList);
      }
    );
  };

  this.changeOutAirport = (event) => {
    this.outAirport = event.selectedAirport;
    this.isButtonDisabled = !isAvailableToSearch();
    console.log('outAirport', this.outAirport);
  };

  this.changeBackAirport = (event) => {
    this.backAirport = event.selectedAirport;
    this.isButtonDisabled = !isAvailableToSearch();
    console.log('backAirport', this.backAirport);
  };

  this.changeStartDate = (event) => {
    this.startDate = event.date;
    this.isButtonDisabled = !isAvailableToSearch();
    console.log('startDate', this.startDate);
    if (moment(event.date) > moment(this.endDate)) {
      this.endDate = moment(event.date).add(2, 'd').toDate();
    }
  };

  this.changeEndDate = (event) => {
    this.endDate = event.date;
    this.isButtonDisabled = !isAvailableToSearch();
    console.log('endDate', this.endDate);
    if (moment(event.date) < moment(this.startDate)) {
      this.startDate = moment(event.date).subtract(2, 'd').toDate();
    }
  };

  this.search = () => {
    if (isAvailableToSearch()) {
      getFlights();
    }
  };
}

export default CheapFlightsManagerController;
