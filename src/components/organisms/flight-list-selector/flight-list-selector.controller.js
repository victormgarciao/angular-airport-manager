function FlightListSelectorController(CheapFlightService) {
  'ngInject';

  CheapFlightService.getFlightsList().then(
    (response) => {
      this.flightList = response;
      console.log('startDate', this.starDate);
      console.log('flights', this.flightList);
    }
  );

  this.updateOutAirport = () => {
    this.onChange({
      $event: {
        outAirport: this.outAirport
      }
    });
  };

  this.updateBackAirport = () => {
    this.onChange({
      $event: {
        backAirport: this.backAirport
      }
    });
  };
}

export default FlightListSelectorController;
