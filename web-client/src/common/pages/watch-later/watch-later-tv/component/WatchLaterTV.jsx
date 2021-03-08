import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../../constants/routes';

import WatchLaterPageComponent from '../../watch-later-page-component';
import EmptyListMessage from '../../../../components/empty-list-message';
import AddedMovieItem from '../../../../components/added-movie-item';

const WatchLaterTV = (props) => {
  const {
    watchLaterTV
  } = props;

  console.log(watchLaterTV)

  const watchLaterList = watchLaterTV.map((watchLaterItem, index) => (
    <AddedMovieItem
      id={watchLaterItem.id}
      key={index}
      navLink={localStorage.getItem('token') ? `${ROUTES.TV_ITEM}/${watchLaterItem.tvId}` : '#'}
      title={watchLaterItem.name}
      description={watchLaterItem.overview}
      releaseDate={watchLaterItem.first_air_date}
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

export default WatchLaterTV;