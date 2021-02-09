import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../../image';
import Item from '../item';

import './movie-tv-item.scss';

const MovieTvItem = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <Item
      className={classNames("movie-tv-item", className)}
      {...restProps}
    >
      <Image
        className="movie-tv-item__image"
        {...restProps}
      />
    </Item>
  );
};

export default MovieTvItem;