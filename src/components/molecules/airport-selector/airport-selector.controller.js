function AirportSelectorController(AirportsService) {
  'ngInject';

  AirportsService.getAirportList().then(
    (response) => {
      this.airports = response;
    }
  );

  const updateAirport = () => {
    this.onChange({
      $event: {
        selectedAirport: this.selectedAirport
      }
    });
  };

  this.changeAirport = (event) => {
    this.selectedAirport = event.selectedOption;
    updateAirport();
  };
}

export default AirportSelectorController;
