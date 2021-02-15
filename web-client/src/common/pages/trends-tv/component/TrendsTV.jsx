import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tvAPI } from '../../../../api/api.tmdb';
import SectionPageNoSearch from '../../../components/page-components/section-page-no-search';
import TrendsItem from '../../../components/trends-item';

const TrendsTV = () => {
  const [todayTrendingTV, setTodayTrendingTV] = useState([]);

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

  useEffect(() => getData(), [fetching]);

  const getData = () => {
    if (!hasNextPage) return;

    if (fetching) {
      tvAPI.getTodayTrendingTV(page)
        .then((response) => {
          if (response.data.total_results === (todayTrendingTV.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTodayTrendingTV(todayTrendingTV => [...todayTrendingTV, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const todayTrendingTVList = todayTrendingTV.map((todayTrendingTVItem, index) => (
    <TrendsItem
      id={todayTrendingTVItem.id}
      key={index}
      name={todayTrendingTVItem.name}
      releaseDate={todayTrendingTVItem.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${todayTrendingTVItem.backdrop_path}`}
      alt={todayTrendingTVItem.name}
    />
  ));

  return (
    <SectionPageNoSearch title="Trends serials">
      {todayTrendingTVList}
    </SectionPageNoSearch>
  );
};

export default TrendsTV;