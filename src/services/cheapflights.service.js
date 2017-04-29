const CheapFlightService = ($http) => {
  //TODO: Write your own implementation
  const getFlightsList = () => (
    $http.get(
      'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0'
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
