import React from 'react';
import PropTypes from 'prop-types';

import SectionPage from '../../../components/page-components/section-page';
import ActorItem from '../../../components/items/actor-item';

const PopularPersons = (props) => {
  const {
    popularPersons
  } = props;

  const popularPersonsList = popularPersons.map(popularPerson => (
    <ActorItem
      id={popularPerson.id}
      key={popularPerson.id}
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
    />
  ));

  return (
    <SectionPage title="Popular persons">
      {popularPersonsList}
    </SectionPage>
  );
};

export default PopularPersons;