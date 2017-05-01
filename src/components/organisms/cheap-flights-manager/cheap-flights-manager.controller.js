import isNil from 'lodash/isNil';
import map from 'lodash/map';
import round from 'lodash/round';
import moment from 'moment';

function CheapFlightsManagerController(CheapFlightService) {
  'ngInject';

  this.isButtonDisabled = true;
  this.buttonLoadingClass = '';

  const isAvailableToSearch = () => {
    if (
      !isNil(this.outAirport) &&
      !isNil(this.backAirport) &&
      !isNil(this.startDate) &&
      !isNil(this.endDate)
    ) {
      return true;
    }
    return false;
  };

  const formatDateYYYYMMDD = date => moment(date).format('YYYY-MM-DD');
  const formatDateDDMMYYYY = date => moment(date).format('DD/MM/YYYY');
  const formatTime = date => moment(date).format('hh:mm');
  const roundPrice = price => round(price);

  const setFlightList = fligthList => (
    map(fligthList, flight => ({
      date: formatDateDDMMYYYY(flight.time),
      time: formatTime(flight.time),
      price: roundPrice(flight.price),
      currency: flight.currency,
    }))
  );

  const searchFlights = () => {
    this.buttonLoadingClass = 'is-loading';
    const flightData = {
      startDate: formatDateYYYYMMDD(this.startDate),
      endDate: formatDateYYYYMMDD(this.endDate),
      outAirportCode: this.outAirport.iataCode,
      backAirportCode: this.backAirport.iataCode,
    };

    CheapFlightService.getFlightsList(flightData).then(
      (response) => {
        this.flightList = setFlightList(response);
        this.buttonLoadingClass = '';
      }
    );
  };

  this.changeOutAirport = (event) => {
    this.outAirport = event.selectedAirport;
    this.isButtonDisabled = !isAvailableToSearch();
  };

  this.changeBackAirport = (event) => {
    this.backAirport = event.selectedAirport;
    this.isButtonDisabled = !isAvailableToSearch();
  };

  this.changeStartDate = (event) => {
    this.startDate = event.date;
    if (moment(event.date) > moment(this.endDate)) {
      this.endDate = moment(event.date).add(2, 'd').toDate();
    }
    this.isButtonDisabled = !isAvailableToSearch();
  };

  this.changeEndDate = (event) => {
    this.endDate = event.date;
    if (moment(event.date) < moment(this.startDate)) {
      this.startDate = moment(event.date).subtract(2, 'd').toDate();
    }
    this.isButtonDisabled = !isAvailableToSearch();
  };

  this.search = () => {
    if (isAvailableToSearch()) {
      searchFlights();
    }
  };

  this.getFlightSelected = (event) => {
    this.date = event.date;
    this.time = event.time;
    this.price = event.price;
    this.currency = event.currency;
  };
}

export default CheapFlightsManagerController;
