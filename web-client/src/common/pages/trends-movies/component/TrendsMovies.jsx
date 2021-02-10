import React from 'react';
import PropTypes from 'prop-types';

import SearchPageComponent from '../../../components/page-components/search-page-component';
import TrendsItem from '../../../components/trends-item';

import './trends-movies.scss';

const TrendsMovies = (props) => {
  const {
    todayTrendingMovies
  } = props;

  const todayTrendingMoviesList = todayTrendingMovies.map(todayTrendingMovie => (
    <TrendsItem
      id={todayTrendingMovie.id}
      key={todayTrendingMovie.id}
      name={todayTrendingMovie.original_title}
      releaseDate={todayTrendingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingMovie.backdrop_path}`}
      alt={todayTrendingMovie.original_title}
    />
  ));

  return (
    <SearchPageComponent
      className="trends-movies"
      title="Trends movies"
    >
      <div className="trends-movies__container">
        {todayTrendingMoviesList}
      </div>
    </SearchPageComponent>
  );
};

export default TrendsMovies;