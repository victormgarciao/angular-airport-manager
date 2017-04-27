const AirportsService = ($http) => {
  const getAirportList = () => (
    $http.get(
      'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/'
    )
    .then(
      function successCallback(response) {
        return response.data.airports;
      },
      function errorCallback(response) {
        const err = response.data.err;
        console.error('AirportService', err);
        return err;
      }
    )
  );

  return { getAirportList };
};

export default AirportsService;
