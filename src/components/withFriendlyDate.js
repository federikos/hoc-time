import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function withFriendlyDate(Component) {
  return class extends React.Component {

    getFriendlyDateString = date => {
      if (moment().diff(date, 'day') <= 25) {
        return moment(date).fromNow()
      }
      return `${moment().diff(date, 'day')} дней назад`;
    }

    render() {
      const friendlyDate = this.getFriendlyDateString(this.props.date);
      return <Component {...this.props} date={friendlyDate} />
    }
  }
}