function FlightListItemController() {
  'ngInject';

  this.sendFlightSelected = () => {
    this.click({
      $event: {
        date: this.date,
        time: this.time,
        price: this.price,
        currency: this.currecy,
      }
    });
  };
}

export default FlightListItemController;