import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { personsAPI } from '../../../../api/api.tmdb';
import ROUTES from '../../../constants/routes';

import SectionPage from '../../../components/page-components/section-page';
import ActorItem from '../../../components/items/actor-item';

const PopularPersons = () => {
  const [persons, setPersons] = useState([]);

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

  useEffect(() => findPersonRequest(), []);
  useEffect(() => getPersonRequest(), [fetching]);

  const findPersonRequest = (query) => {
    personsAPI.findPerson(query)
      .then((response) => {
        setPersons(() => [...response.data.results]);
      })
  }

  const getPersonRequest = () => {
    if (!hasNextPage) return;

    if (fetching) {
      personsAPI.getPopularPersons(page)
        .then((response) => {
          if (response.data.total_results === (persons.length + response.data.results.length)) {
            setHasNextPage(false);
          }

          setPersons(persons => [...persons, ...response.data.results]);
          setPage(page => page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }

  const onFindPerson = (person) => {
    findPersonRequest(person.search);

    !person.search && getPersonRequest();
  }

  const popularPersonsList = persons.map((popularPerson, index) => (
    <ActorItem
      id={popularPerson.id}
      navLink={`${ROUTES.PERSON_ITEM}/${popularPerson.id}`}
      key={index}
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
    />
  ));

  return (
    <SectionPage title="Popular persons" onChange={onFindPerson}>
      {popularPersonsList}
    </SectionPage>
  );
};

export default PopularPersons;