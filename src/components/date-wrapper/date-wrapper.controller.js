import moment from 'moment';

export default function DateWrapperController() {
  'ngInject';

  this.changeStartDate = (event) => {
    this.startDate = event.date;
    console.log('startDate', this.startDate);
    if (moment(event.date) > moment(this.endDate)) {
      this.endDate = moment(event.date).add(2, 'd').toDate();
      console.log('endDate +++', this.endDate);
    }
  };

  this.changeEndDate = (event) => {
    this.endDate = event.date;
    console.log('endDate', this.endDate);
    if (moment(event.date) < moment(this.startDate)) {
      this.startDate = moment(event.date).subtract(2, 'd').toDate();
      console.log('startDate +++', this.startDate);
    }
  };
}
