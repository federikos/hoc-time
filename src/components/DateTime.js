import React from 'react';
import PropTypes from 'prop-types';
import withFriendlyDate from './withFriendlyDate';

const DateTime = ({date}) => {
  return (
    <p className="date">{date}</p>
  );
};

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
};

const DateTimePretty = withFriendlyDate(DateTime);


//Экспортируем DateTime по умолчанию, DateTimePretty - дополнительная опция
export {DateTimePretty};
export default DateTime;