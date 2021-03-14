import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FavoriteStar from '../component';

import favoriteIcon from '../../../../assets/icons/favorite-star_outlined.svg';

import './favorite-star-outlined.scss';

const FavoriteStarOutlined = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <FavoriteStar
      className={classNames("favorite-star-outlined", className)}
      glyph={favoriteIcon.id}
      viewBox={favoriteIcon.viewBox}
      {...restProps}
    />
  );
};

export default FavoriteStarOutlined;