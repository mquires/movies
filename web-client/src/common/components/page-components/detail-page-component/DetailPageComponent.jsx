import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../../components/image';
import Avatar from '../../../components/avatar';
import ROUTES from '../../../constants/routes';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import TrendsItem from '../../../components/trends-item';
import ActorItem from '../../../components/items/actor-item';
import MovieTvItem from '../../../components/items/movie-tv-item';
import Icon from '../../../components/icon';
import Preloader from '../../../components/preloader';
import ErrorMessage from '../../../components/error-message/ErrorMessage';

import moneyIcon from '../../../../assets/icons/money.svg';
import languageIcon from '../../../../assets/icons/language.svg';
import noPhoto from '../../../../assets/images/no-photo.png';
import noAvatar from '../../../../assets/images/no-avatar.jpg';
import noBackground from '../../../../assets/images/no-background.png';
import noWallpaper from '../../../../assets/images/no-wallpaper.jpg';
import KeyWordItem from '../../../components/keyword-item';

import './detail-page-component.scss';

const DetailPageComponent = (props) => {
  const {
    className
  } = props;

  const popularPersonsList = popularPersons.map((popularPerson, index) => (
    <ActorItem
      id={popularPerson.id}
      key={index}
      className="section-items__item"
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
      onError={(e) => e.target.src = 'https://static.thenounproject.com/png/156197-200.png'}
    />
  ));

  const productionCompaniesList = movieDetails?.production_companies.map((productionCompany, index) => (
    <MovieTvItem
      id={productionCompany.id}
      key={index}
      title={productionCompany.name}
      src={`http://image.tmdb.org/t/p/w1280${productionCompany.logo_path}`}
      alt={productionCompany.name}
      onError={(e) => e.target.src = noPhoto}
    />
  ));

  const recommendationsList = recommendations.map((recommendation, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={recommendation.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.MOVIE_ITEM}/${recommendation.id}`}
        navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${recommendation.id}`}
        name={recommendation.original_title}
        releaseDate={recommendation.release_date}
        src={`http://image.tmdb.org/t/p/w1280${recommendation.backdrop_path}`}
        alt={recommendation.original_title}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const movieImagesList = movieImages.map((movieImage, index) => (
    <li
      className="movie-details__picture-item"
      id={movieImage.id}
      key={index}
    >
      <Image
        className="movie-details__picture"
        src={`http://image.tmdb.org/t/p/w1280${movieImage.file_path}`}
        alt="Picture of the movie"
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const similarMoviesList = similarMovies.map((similarMovie, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={similarMovie.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.MOVIE_ITEM}/${similarMovie.id}`}
        navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${similarMovie.id}`}
        name={similarMovie.original_title}
        releaseDate={similarMovie.release_date}
        src={`http://image.tmdb.org/t/p/w1280${similarMovie.backdrop_path}`}
        alt={similarMovie.original_title}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const moviesKeywordsList = moviesKeywords.map((moviesKeyword, index) => (
    <KeyWordItem
      id={moviesKeyword.id}
      key={index}
    >
      {moviesKeyword.name}
    </KeyWordItem>
  ));

  const moviesCastList = moviesCast.map((moviesCastItem, index) => (
    <NavLink
      to={ROUTES.MAIN}
      className="movie-details__actor"
      id={moviesCastItem.id}
      key={index}
    >
      <Avatar
        src={`http://image.tmdb.org/t/p/w1280${moviesCastItem.profile_path}`}
        alt={moviesCastItem.name}
        onError={(e) => e.target.src = noAvatar}
      />
      <p>{moviesCastItem.name}</p>
    </NavLink>
  ));

  return (
    <section className={classNames("detail-page-component", className)}>
      {!detail ?
        <Preloader /> :
        <>
          <DetailItemBackground {...restProps} />
          <div className="movie-details__container">
            <div className="movie-details__info-wrapper">
              <div className="movie-details__info">
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
                          <p>{movieDetails.budget}$</p>
                        </li>
                        <li className="movie-details__secondary-info-item">
                          <Icon
                            className="movie-details__icon"
                            glyph={languageIcon.id}
                            viewBox={languageIcon.viewBox}
                          />
                          <p>{movieDetails.original_language}</p>
                        </li>
                      </ul>
                    </div>
                    <div className="movie-details__section-info">
                      <h3 className="movie-details__section-info-title">Keywords</h3>
                      <ul className="movie-details__keywords-list">
                        {
                          moviesKeywordsList.length === 0 ?
                            <ErrorMessage message="List is empty" /> :
                            <>{moviesKeywordsList}</>
                        }
                      </ul>
                    </div>
                    <div className="movie-details__section-info">
                      <h3 className="movie-details__section-info-title">About</h3>
                      <p className="movie-details__section-info-text">{movieDetails.overview}</p>
                    </div>
                  </div>
                  <Image
                    className="movie-details__poster"
                    src={`http://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
                    alt="Poster"
                    onError={(e) => e.target.src = noWallpaper}
                  />
                </div>
                <SectionInfoSeeAll title="Pictures" navLink={ROUTES.MAIN} className="movie-details__section-info">
                  <ul className="movie-details__pictures-list">
                    {
                      movieImagesList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{movieImagesList}</>
                    }
                  </ul>
                </SectionInfoSeeAll>
                <div className="movie-details__section-info">
                  <h3 className="movie-details__section-info-title">Similar movies</h3>
                  <ul className="movie-details__similar-movies-list">
                    {
                      similarMoviesList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{similarMoviesList}</>
                    }
                  </ul>
                </div>
                <div className="movie-details__section-info">
                  <h3 className="movie-details__section-info-title">Production companies</h3>
                  <ul className="movie-details__similar-movies-list">
                    {
                      recommendationsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{productionCompaniesList}</>
                    }
                  </ul>
                </div>
                <div className="movie-details__section-info">
                  <h3 className="movie-details__section-info-title">Recommendations</h3>
                  <ul className="movie-details__similar-movies-list">
                    {
                      recommendationsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{recommendationsList}</>
                    }
                  </ul>
                </div>
                <SectionInfoSeeAll
                  className="section-items"
                  title="Popular persons"
                  navLink={ROUTES.POPULAR_PERSONS}
                >
                  {popularPersonsList}
                </SectionInfoSeeAll>
              </div>
            </div>
            <div className="movie-details__cast">
              <h3 className="movie-details__cast-title">Cast</h3>
              {
                moviesCastList.length === 0 ?
                  <ErrorMessage message="List is empty" /> :
                  <>{moviesCastList}</>
              }
            </div>
          </div>
        </>
      }
    </section>
  );
};

export default DetailPageComponent;