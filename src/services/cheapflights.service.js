const CheapFlightService = ($http) => {
  const getFlightsList = flightData => (
    $http.get(
      `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${flightData.outAirportCode}/to/${flightData.backAirportCode}/${flightData.startDate}/${flightData.endDate}/250/unique/?limit=15&offset-0`
    )
    .then(
      function successCallback(response) {
        return response.data.flights;
      },
      function errorCallback(response) {
        const err = response.data.err;
        console.error('CheapFligthService', err);
        return err;
      }
    )
  );

  return { getFlightsList };
};

export default CheapFlightService;
