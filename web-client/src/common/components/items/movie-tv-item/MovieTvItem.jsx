import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../../image';
import Item from '../item';

import './movie-tv-item.scss';
import { NavLink } from 'react-router-dom';

const MovieTvItem = (props) => {
  const {
    className,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink
      className={classNames("movie-tv-item", className)}
      to={navLink}
    >
      <Item {...restProps}>
        <Image
          className="movie-tv-item__image"
          {...restProps}
        />
      </Item>
    </NavLink>
  );
};

MovieTvItem.propTypes = {
  className: PropTypes.string,
  navLink: PropTypes.string
}

MovieTvItem.defaultProps = {
  className: undefined,
  navLink: "#"
}

export default MovieTvItem;