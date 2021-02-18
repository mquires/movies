import React from "react";

import Icon from '../../components/icon';
import Image from '../../components/image';

import moneyIcon from '../../../assets/icons/money.svg';
import languageIcon from '../../../assets/icons/language.svg';
import noWallpaper from '../../../assets/images/no-wallpaper.jpg';

const DetailItemPoster = (props) => {
  const {
    budget,
    language,
    children,
    overview,
    posterImage
  } = props;

  return (
    <div className="movie-details__poster-container">
      <div>
        <div className="movie-details__section-info">
          <ul className="movie-details__keywords-list">
            <li className="movie-details__secondary-info-item">
              <Icon
                className="movie-details__icon"
                glyph={moneyIcon.id}
                viewBox={moneyIcon.viewBox}
              />
              <p>{budget}$</p>
            </li>
            <li className="movie-details__secondary-info-item">
              <Icon
                className="movie-details__icon"
                glyph={languageIcon.id}
                viewBox={languageIcon.viewBox}
              />
              <p>{language}</p>
            </li>
          </ul>
        </div>
        <div className="movie-details__section-info">
          <h3 className="movie-details__section-info-title">Keywords</h3>
          <ul className="movie-details__keywords-list">
            {children}
          </ul>
        </div>
        <div className="movie-details__section-info">
          <h3 className="movie-details__section-info-title">About</h3>
          <p className="movie-details__section-info-text">{overview}</p>
        </div>
      </div>
      <Image
        className="movie-details__poster"
        src={`http://image.tmdb.org/t/p/w1280${posterImage}`}
        alt="Poster"
        onError={(e) => e.target.src = noWallpaper}
      />
    </div>
  );
}

export default DetailItemPoster;