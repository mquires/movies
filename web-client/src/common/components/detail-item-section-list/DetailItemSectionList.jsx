import React from 'react';
import PropTypes from 'prop-types';

const DetailItemSectionList = (props) => {
  const {
    title,
    children
  } = props;

  return (
    <div className="movie-details__section-info">
      <h3 className="movie-details__section-info-title">{title}</h3>
      <ul className="movie-details__similar-movies-list">
        {children}
      </ul>
    </div>
  );
};

export default DetailItemSectionList;