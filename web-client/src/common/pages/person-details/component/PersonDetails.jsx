import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../../../components/image';
import Preloader from '../../../components/preloader';

import './person-details.scss';

const PersonDetails = (props) => {
  const {
    className,
    personDetails
  } = props;

  return (
    <section className={classNames("person-details", className)}>
      <div className="person-details__container">
        {
          !personDetails ?
            <Preloader /> :
            <Image
              className="person-details__avatar"
              src={`http://image.tmdb.org/t/p/w1280${personDetails.profile_path}`}
              alt={personDetails.name}
            />
        }
      </div>
    </section>
  );
};

export default PersonDetails;