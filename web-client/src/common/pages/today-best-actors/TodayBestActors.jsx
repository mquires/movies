import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { personsAPI } from '../../../api/api.tmdb';
import ROUTES from '../../constants/routes';

import TrendsItem from '../../components/trends-item';

import todayBestActorsImage from '../../../assets/images/the_best_actors_today.jpg';
import todayBestActorsIcon from '../../../assets/icons/actor.svg';
import ShowMorePageItem from '../../components/show-more-page-item';
import Preloader from '../../components/preloader';
import ActorItem from '../../components/items/actor-item';

const TodayBestActors = () => {
  const [todayBestActors, setTodayBestActors] = useState([]);

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
      personsAPI.getTodayBestActors(page)
        .then((response) => {
          console.log(response)
          if (response.data.total_results === (todayBestActors.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setTodayBestActors(todayBestActors => [...todayBestActors, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const TodayBestActorsList = todayBestActors.map((todayBestActor, index) => (
    <ActorItem
      id={todayBestActor.id}
      key={index}
      navLink={`${ROUTES.PERSON_ITEM}/${todayBestActor.id}`}
      title={todayBestActor.name}
      src={`http://image.tmdb.org/t/p/w1280/${todayBestActor.profile_path}`}
      alt={todayBestActor.name}
    />
  ));

  return (
    <ShowMorePageItem
      title="The best actors today"
      showMorePageTitle="The best actors today"
      src={todayBestActorsImage}
      alt="The best actors today"
      glyph={todayBestActorsIcon.id}
      viewBox={todayBestActorsIcon.viewBox}
    >
      {
        todayBestActors.length === 0 ?
          <Preloader /> :
          TodayBestActorsList
      }
    </ShowMorePageItem>
  );
};

export default TodayBestActors;