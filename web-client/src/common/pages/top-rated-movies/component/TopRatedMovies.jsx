import React from 'react';
import PropTypes from 'prop-types';

import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';

const TopRatedMovies = (props) => {
  const {
    topRatedMovies
  } = props;

  const topRatedMoviesList = topRatedMovies.map(topRatedMovie => (
    <TrendsItem
      id={topRatedMovie.id}
      key={topRatedMovie.id}
      name={topRatedMovie.original_title}
      releaseDate={topRatedMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedMovie.backdrop_path}`}
      alt={topRatedMovie.original_title}
    />
  ));

  return (
    <SectionPageNoSearch title="Top rated">
      {topRatedMoviesList}
    </SectionPageNoSearch>
  );
};

export default TopRatedMovies;