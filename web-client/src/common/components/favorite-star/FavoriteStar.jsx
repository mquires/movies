import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../../components/icon';

import favoriteIcon from '../../../assets/icons/favorite-star.svg';

import './favorite-star.scss';

const FavoriteStar = (props) => {
  const {
    className,
    onClick
  } = props;

  return (
    <Icon
      className={classNames("favorite-star", className)}
      glyph={favoriteIcon.id}
      viewBox={favoriteIcon.viewBox}
      onClick={onClick}
    />
  );
};

export default FavoriteStar;