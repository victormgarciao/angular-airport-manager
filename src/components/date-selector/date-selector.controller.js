export default function DateSelectorController() {
  this.updateDate = () => {
    this.onChange({
      $event: {
        date: this.date
      }
    });
  };
}
