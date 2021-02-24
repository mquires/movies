import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tvAPI } from '../../../api/api.tmdb';
import ROUTES from '../../constants/routes';

import TrendsItem from '../../components/trends-item';

import TopWeekSerialsImage from '../../../assets/images/top_weeks_serials.jpg';
import TopWeekSerialsIcon from '../../../assets/icons/top-week.svg';
import ShowMorePageItem from '../../components/show-more-page-item';
import Preloader from '../../components/preloader';

const TopWeekSerials = () => {
  const [TopWeekSerials, setTopWeekSerials] = useState([]);

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
      tvAPI.getTopWeekSerials(page)
        .then((response) => {
          if (response.data.total_results === (TopWeekSerials.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTopWeekSerials(TopWeekSerials => [...TopWeekSerials, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const TopWeekSerialsList = TopWeekSerials.map((TopWeekSerial, index) => (
    <TrendsItem
      id={TopWeekSerial.id}
      key={index}
      navLink={`${ROUTES.TV_ITEM}/${TopWeekSerial.id}`}
      navPlayButtonLink={`${ROUTES.TV_ITEM}/${TopWeekSerial.id}`}
      name={TopWeekSerial.name}
      releaseDate={TopWeekSerial.first_air_date}
      src={`http://image.tmdb.org/t/p/w1280/${TopWeekSerial.backdrop_path}`}
      alt={TopWeekSerial.name}
    />
  ));

  return (
    <ShowMorePageItem
      title="Top week's serials"
      showMorePageTitle="Top week's serials"
      src={TopWeekSerialsImage}
      alt="Top week's serials"
      glyph={TopWeekSerialsIcon.id}
      viewBox={TopWeekSerialsIcon.viewBox}
    >
      {
        TopWeekSerials.length === 0 ?
          <Preloader /> :
          TopWeekSerialsList
      }
    </ShowMorePageItem>
  );
};

export default TopWeekSerials;