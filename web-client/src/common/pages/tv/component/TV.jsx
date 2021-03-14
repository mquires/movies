import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import { tvAPI } from '../../../../api/api.tmdb';

import PageComponent from '../../../components/page-components/page-component';
import MovieItem from '../../../components/movie-item';
import SectionInfo from '../../../components/section-info';
import TrendsItem from '../../../components/trends-item';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import Preloader from '../../../components/preloader';

import './tv.scss';

const TV = (props) => {
  const {
    todayTrendingTV,
    genres,
    onSendTVDetails,
    successSending,
    userId
  } = props;

  const [tv, setTV] = useState([]);

  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [fetching, setIsFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsFetching(true);
    }
  }

  useEffect(() => findTVRequest(), []);
  useEffect(() => getTVRequest(), [fetching]);

  const findTVRequest = (query) => {
    tvAPI.findTV(query)
      .then((response) => {
        setTV(() => [...response.data.results]);
      })
  }

  const getTVRequest = () => {
    if (!hasNextPage) return;

    if (fetching) {
      tvAPI.getTV(page)
        .then((response) => {
          if (response.data.total_results === (tv.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTV(tv => [...tv, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const getTVResetRequest = () => {
    tvAPI.getTV(1)
      .then((response) => {
        setTV(() => [...response.data.results]);
      })
  }

  const onFindTV = (tv) => {
    findTVRequest(tv.search);

    !tv.search && getTVRequest(1);
  }

  const tvList = tv.map((tvItem, index) => (
    <MovieItem
      id={tvItem.id}
      key={index}
      navLink={localStorage.getItem('token') ? `${ROUTES.TV_ITEM}/${tvItem.id}` : '#'}
      movieName={tvItem.name}
      movieOverview={tvItem.overview}
      language={tvItem.original_language}
      releaseDate={tvItem.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${tvItem.poster_path}`}
      alt={tvItem.name}
      onWatchLaterClick={() => onSendTVDetails(userId, tvItem.id)}
      successSending={successSending}
    />
  ));

  const todayTrendingTVList = todayTrendingTV.map((todayTrendingTVItem, index) => (
    <TrendsItem
      id={todayTrendingTVItem.id}
      key={index}
      navLink={`${ROUTES.TV_ITEM}/${todayTrendingTVItem.id}`}
      navPlayButtonLink={`${ROUTES.TV_ITEM}/${todayTrendingTVItem.id}`}
      className="section-items__item"
      name={todayTrendingTVItem.name}
      releaseDate={todayTrendingTVItem.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingTVItem.backdrop_path}`}
      alt={todayTrendingTVItem.name}
    />
  ));

  const getTVByGenreRequest = (genre) => {
    if (!hasNextPage) return;

    tvAPI.getTV(page, genre)
      .then((response) => {
        if (response.data.total_results === (tv.length + response.data.results.length)) {
          setHasNextPage(false);
        }

        setTV(() => [...response.data.results]);
        setPage(page => page + 1);
      })
      .finally(() => setIsFetching(false));
  }

  const onGetTVByGenre = (genreId) => {
    getTVByGenreRequest(genreId);
  }

  return (
    <PageComponent
      className="movies"
      title="TV"
    >
      <SectionInfoSeeAll
        className="section-items"
        title="Today's trends"
        navLink={ROUTES.ALL_TODAY_TRENDS_TV}
      >
        {
          fetching ?
            <Preloader /> :
            <>{todayTrendingTVList}</>
        }
      </SectionInfoSeeAll>
      <SectionInfo
        className="movies__list"
        title="TV list"
        onChange={onFindTV}
        onSubmit={onFindTV}
        genres={genres}
        onClick={onGetTVByGenre}
        onResetClick={getTVResetRequest}
      >
        {tvList}
      </SectionInfo>
    </PageComponent>
  );
};

export default TV;