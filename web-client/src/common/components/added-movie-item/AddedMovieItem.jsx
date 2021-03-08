import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Image from '../image';

import noWallpaper from '../../../assets/images/no-wallpaper.jpg';

import './added-movie-item.scss';

const AddedMovieItem = (props) => {
  const {
    navLink,
    className,
    title,
    releaseDate,
    description,
    ...restProps
  } = props;

  return (
    <NavLink
      to={navLink}
      className={classNames("added-movie-item", className)}
    >
      <p className="added-movie-item__watch-later">Watch later</p>
      <h3 className="added-movie-item__title">{title}</h3>
      <p className="added-movie-item__release-date">{releaseDate}</p>
      <div className="added-movie-item__cover-container">
        <Image
          className="added-movie-item__cover"
          onError={e => e.target.src = noWallpaper}
          {...restProps}
        />
        <p className="added-movie-item__description">{description}...</p>
      </div>
    </NavLink>
  );
};

export default AddedMovieItem;