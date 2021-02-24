import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tvAPI } from '../../../api/api.tmdb';
import ROUTES from '../../constants/routes';

import TrendsItem from '../../components/trends-item';

import topRatedImage from '../../../assets/images/top_rated_tv.jpg';
import topRatedIcon from '../../../assets/icons/top-rated.svg';
import ShowMorePageItem from '../../components/show-more-page-item';
import Preloader from '../../components/preloader';

const TopRatedTV = () => {
  const [topRatedTV, setTopRatedTV] = useState([]);

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
      tvAPI.getTopRatedTV(page)
        .then((response) => {
          if (response.data.total_results === (topRatedTV.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTopRatedTV(topRatedTV => [...topRatedTV, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const topRatedTVList = topRatedTV.map((topRatedTVItem, index) => (
    <TrendsItem
      id={topRatedTVItem.id}
      key={index}
      navLink={`${ROUTES.TV_ITEM}/${topRatedTVItem.id}`}
      navPlayButtonLink={`${ROUTES.TV_ITEM}/${topRatedTVItem.id}`}
      name={topRatedTVItem.name}
      releaseDate={topRatedTVItem.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${topRatedTVItem.backdrop_path}`}
      alt={topRatedTVItem.name}
    />
  ));

  return (
    <ShowMorePageItem
      title="Top rated serials"
      showMorePageTitle="Top rated"
      src={topRatedImage}
      alt="Top rated"
      glyph={topRatedIcon.id}
      viewBox={topRatedIcon.viewBox}
    >
      {
        topRatedTV.length === 0 ?
          <Preloader /> :
          topRatedTVList
      }
    </ShowMorePageItem>
  );
};

export default TopRatedTV;