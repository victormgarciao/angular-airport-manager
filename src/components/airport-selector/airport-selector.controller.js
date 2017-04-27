function AirportSelectorController($http, AirportsService) {
  'ngInject';

  AirportsService.getAirportList().then(
    (response) => {
      this.airports = response;
      this.selectedAirport = this.airports[0];
    }
  );

  this.updateAirport = () => {
    this.onChange({
      $event: {
        selectedAirport: this.selectedAirport
      }
    });
  };
}

export default AirportSelectorController;
