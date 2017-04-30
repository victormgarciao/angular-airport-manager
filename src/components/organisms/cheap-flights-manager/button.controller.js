function ButtonController() {
  'ngInject';

  this.handleClick = () => {
    this.onClick({});
  };

  this.styles = {
    color: '#073590',
    fontWeight: 'bold',
    backgroundColor: '#ebbd10',
    borderColor: '#ebbd10',
  };
}

export default ButtonController;
