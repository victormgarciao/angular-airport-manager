function AirportSelectorController($http, $scope, AirportsService) {
  'ngInject';

  AirportsService.getAirportList().then(
    (response) => {
      $scope.airports = response;
      this.selectedAirport = $scope.airports[0];
    }
  );

  $scope.$watch('$ctrl.selectedAirport', () => {
    console.log('selected', this.selectedAirport);
    return this.selectedAirport;
  });
}

export default AirportSelectorController;
