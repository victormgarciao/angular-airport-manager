function AirportSelectorController(AirportsService) {
  'ngInject';

  AirportsService.getAirportList().then(
    (response) => {
      this.airports = response;
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
