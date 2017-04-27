export default function AirportWrapperController() {
  'ngInject';

  this.changeOutAirport = (event) => {
    console.log('out', event.selectedAirport);
    this.outAirport = event.selectedAirport;
  };

  this.changeBackAirport = (event) => {
    console.log('back', event.selectedAirport);
    this.backAirport = event.selectedAirport;
  };
}
