import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './DateTime';

const Video = ({url, date}) => {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTime date={date} />
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Video;