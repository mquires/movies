import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FavoriteStar from '../component';

import favoriteIcon from '../../../../assets/icons/favorite-star_filled.svg';

import './favorite-star-filled.scss';

const FavoriteStarFilled = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <FavoriteStar
      className={classNames("favorite-star-filled", className)}
      glyph={favoriteIcon.id}
      viewBox={favoriteIcon.viewBox}
      {...restProps}
    />
  );
};

export default FavoriteStarFilled;