import React from 'react';
import PropTypes from 'prop-types';

import SectionPage from '../../../components/page-components/section-page';
import TrendsItem from '../../../components/trends-item';

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
    <SectionPage title="Trends movies">
      {todayTrendingMoviesList}
    </SectionPage>
  );
};

export default TrendsMovies;