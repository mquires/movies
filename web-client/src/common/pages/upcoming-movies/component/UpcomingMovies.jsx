import React from 'react';
import PropTypes from 'prop-types';

import TrendsItem from '../../../components/trends-item';
import SectionPage from '../../../components/page-components/section-page';

import './upcoming-movies.scss';
import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';

const UpcomingMovies = (props) => {
  const {
    upcomingMovies
  } = props;

  const upcomingMoviesList = upcomingMovies.map(upcomingMovie => (
    <TrendsItem
      id={upcomingMovie.id}
      key={upcomingMovie.id}
      name={upcomingMovie.original_title}
      releaseDate={upcomingMovie.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${upcomingMovie.backdrop_path}`}
      alt={upcomingMovie.original_title}
    />
  ));

  return (
    <SectionPageNoSearch title="Upcoming movies">
      {upcomingMoviesList}
    </SectionPageNoSearch>
  );
};

export default UpcomingMovies;