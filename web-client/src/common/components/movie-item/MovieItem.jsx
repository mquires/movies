import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Image from '../image';
import Icon from '../icon';
import LoginPopup from '../../components/popups/login-popup';
import Button from '../buttons/main-button';
import PageWithSuccessMessage from '../page-components/page-with-success-message';

import noWallpaper from '../../../assets/images/no-wallpaper.jpg';
import languageIcon from '../../../assets/icons/language.svg';

import './movie-item.scss';

const MovieItem = (props) => {
  const {
    className,
    movieName,
    movieOverview,
    language,
    releaseDate,
    navLink,
    onClick,
    onError,
    onWatchLaterClick,
    successSending,
    ...restProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const canOpen = () => {
    !localStorage.getItem('token') && toggleMenu();
  }

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="Submit successfully"
    >
      <div
        className="movie-item__wrapper"
        onClick={canOpen}
      >
        {
          isOpen &&
          <LoginPopup
            open={toggleMenu}
            onRequestClose={closeMenu}
          />
        }
        <Button
          className="movie-item__watch-later"
          caption="Watch later"
          onClick={onWatchLaterClick}
        />
        <NavLink
          to={navLink}
          className={classNames('movie-item', className)}
          onClick={onClick}
        >
          <Image
            className="movie-item__image"
            onError={(e) => e.target.src = noWallpaper}
            {...restProps}
          />
          <div className="movie-item__info">
            <div className="movie-item__info-main">
              <h3 className="movie-item__title">
                {movieName}
              </h3>
              <p className="movie-item__overview">
                {movieOverview}
              </p>
            </div>
            <div className="movie-item__lang-date">
              <div className="movie-item__language">
                <Icon
                  className="movie-item__language-icon"
                  glyph={languageIcon.id}
                  viewBox={languageIcon.viewBox}
                />
                <p>{language}</p>
              </div>
              <p>{releaseDate}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </PageWithSuccessMessage>
  );
};

export default MovieItem;