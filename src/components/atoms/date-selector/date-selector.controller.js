function DateSelectorController() {
  'ngInject';

  this.updateDate = () => {
    this.onChange({
      $event: {
        date: this.date
      }
    });
  };
}

export default DateSelectorController;
