import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import SearchPageComponent from '../../../components/page-components/search-page-component';
import MovieItem from '../../../components/movie-item';
import Categories from '../../../components/categories';
import CategoryItem from '../../../components/categories/category-item';
import SectionInfo from '../../../components/section-info';
import TrendsItem from '../../../components/trends-item';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';

import './movies.scss';

const Movies = (props) => {
  const {
    movies,
    todayTrendingMovies,
    onSubmit
  } = props;

  const moviesList = movies.map(movie => (
    <MovieItem
      id={movie.id}
      key={movie.id}
      movieName={movie.original_title}
      movieOverview={movie.overview}
      language={movie.original_language}
      releaseDate={movie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
      alt={movie.original_title}
    />
  ));

  const todayTrendingMoviesList = todayTrendingMovies.map(todayTrendingMovie => (
    <TrendsItem
      id={todayTrendingMovie.id}
      key={todayTrendingMovie.id}
      className="trends__item"
      name={todayTrendingMovie.original_title}
      releaseDate={todayTrendingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingMovie.backdrop_path}`}
      alt={todayTrendingMovie.original_title}
    />
  ));

  return (
    <SearchPageComponent
      className="movies"
      title="Movies"
      onSubmit={onSubmit}
    >
      <Categories title="Find more">
        <CategoryItem categoryTitle="Comedy" />
        <CategoryItem categoryTitle="Comedy" />
        <CategoryItem categoryTitle="Comedy" />
      </Categories>
      <SectionInfoSeeAll
        className="trends"
        title="Today's trends"
        navLink={ROUTES.ALL_TODAY_TRENDS_MOVIES}
      >
        {todayTrendingMoviesList}
      </SectionInfoSeeAll>
      <SectionInfo className="movies__list" title="Movies list">
        {moviesList}
      </SectionInfo>
    </SearchPageComponent>
  );
};

export default Movies;