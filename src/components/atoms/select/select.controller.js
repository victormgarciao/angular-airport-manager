function SelectController() {
  'ngInject';

  this.changeValue = () => {
    this.onChange({
      $event: {
        selectedOption: this.model
      }
    });
  };
}

export default SelectController;
