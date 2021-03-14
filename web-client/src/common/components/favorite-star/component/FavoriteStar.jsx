import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../../../components/icon';

import './favorite-star.scss';

const FavoriteStar = (props) => {
  const {
    className,
    onClick,
    ...restProps
  } = props;

  return (
    <Icon
      className={classNames("favorite-star", className)}
      onClick={onClick}
      {...restProps}
    />
  );
};

export default FavoriteStar;