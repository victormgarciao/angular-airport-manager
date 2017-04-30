function SelectController() {
  'ngInject';

  this.styles = {
    width: '100%',
  };

  this.changeValue = () => {
    this.onChange({
      $event: {
        selectedOption: this.model
      }
    });
  };
}

export default SelectController;
