function FlightDateSelectorController() {
  'ngInject';

  const updateDate = () => {
    this.onChange({
      $event: {
        date: this.date
      }
    });
  };

  this.changeStartDate = (event) => {
    this.date = event.date;
    updateDate();
  };
}

export default FlightDateSelectorController;
