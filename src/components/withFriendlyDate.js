import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function withFriendlyDate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        friendlyDate: '',
      }
    }

    getFriendlyDateString = date => {
      if (moment().diff(date, 'day') <= 25) {
        return moment(date).fromNow()
      }
      return `${moment().diff(date, 'day')} дней назад`;
    }

    componentDidMount() {
      const friendlyDate = this.getFriendlyDateString(this.props.date);
      this.setState({
        friendlyDate
      })
    }

    render() {
      return <Component {...this.props} date={this.state.friendlyDate} />
    }
  }
}