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

    componentDidMount() {
      this.setState({
        friendlyDate: moment(this.props.date).fromNow()
      })
    }

    render() {
      return <Component {...this.props} date={moment(this.props.date).fromNow()} />
    }
  }
}