import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../../constants/routes';

import WatchLaterPageComponent from '../../watch-later-page-component';
import EmptyListMessage from '../../../../components/empty-list-message';
import AddedMovieItem from '../../../../components/added-movie-item';

const WatchLaterMovies = (props) => {
  const {
    watchLater
  } = props;

  const watchLaterList = watchLater.map((watchLaterItem, index) => (
    <AddedMovieItem
      id={watchLaterItem.id}
      key={index}
      navLink={localStorage.getItem('token') ? `${ROUTES.MOVIE_ITEM}/${watchLaterItem.movieId}` : '#'}
      title={watchLaterItem.original_title}
      description={watchLaterItem.overview}
      releaseDate={watchLaterItem.release_date}
      src={`http://image.tmdb.org/t/p/w1280/${watchLaterItem.poster_path}`}
      alt={watchLaterItem.name}
    />
  ));

  return (
    <WatchLaterPageComponent>
      {watchLaterList.length === 0 ? <EmptyListMessage /> : watchLaterList}
    </WatchLaterPageComponent>
  );
};

export default WatchLaterMovies;