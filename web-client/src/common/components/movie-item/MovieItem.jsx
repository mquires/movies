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
    <article className={classNames('movie-item', className)}>
      <Image
        className="movie-item__image"
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
    </article>
  );
};

export default MovieItem;