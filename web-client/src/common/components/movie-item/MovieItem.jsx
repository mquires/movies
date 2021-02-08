import React from 'react';
import classNames from 'classnames';

import Image from '../image';
import Icon from '../icon';

import languageIcon from '../../../assets/icons/language.svg';

import './movie-item.scss';

const MovieItem = (props) => {
  const {
    className,
    movieName,
    movieOverview,
    language,
    releaseDate,
    ...restProps
  } = props;

  return (
    <article className={classNames('film-item', className)}>
      <Image
        className="film-item__image"
        {...restProps}
      />
      <div className="film-item__info">
        <div className="film-item__info-main">
          <h3 className="film-item__title">
            {movieName}
          </h3>
          <p className="film-item__overview">
            {movieOverview}
          </p>
        </div>
        <div className="film-item__lang-date">
          <div className="film-item__language">
            <Icon
              className="film-item__language-icon"
              glyph={languageIcon.id}
              viewBox={languageIcon.viewBox}
            />
            <p>{language}</p>
          </div>
          <p>{releaseDate}</p>
        </div>
      </div>
    </article>
  );
};

export default MovieItem;