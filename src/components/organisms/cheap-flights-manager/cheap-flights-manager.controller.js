function CheapFlightsManagerController() {
  'ngInject';

  this.changeOutAirport = (event) => {
    this.outAirport = event.selectedAirport;
    console.log('outAirport', this.outAirport);
  };

  this.changeBackAirport = (event) => {
    this.backAirport = event.selectedAirport;
    console.log('backAirport', this.backAirport);
  };

  this.changeStartDate = (event) => {
    this.startDate = event.date;
    console.log('startDate', this.startDate);
    if (moment(event.date) > moment(this.endDate)) {
      this.endDate = moment(event.date).add(2, 'd').toDate();
    }
  };

  this.changeEndDate = (event) => {
    this.endDate = event.date;
    console.log('endDate', this.endDate);
    if (moment(event.date) < moment(this.startDate)) {
      this.startDate = moment(event.date).subtract(2, 'd').toDate();
    }
  };
}

export default CheapFlightsManagerController;
