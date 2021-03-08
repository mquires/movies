import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import Image from '../../../components/image';
import Preloader from '../../../components/preloader';
import TrendsItem from '../../../components/trends-item';
import ErrorMessage from '../../../components/error-message';
import FavoriteStar from '../../../components/favorite-star';

import './person-details.scss';

const PersonDetails = (props) => {
  const {
    className,
    personDetails,
    personMovieCredits,
    onSendFavoritePerson
  } = props;

  const alsoKnownAsList = (!personDetails?.also_known_as) ?
    <Preloader /> :
    personDetails?.also_known_as.map((alsoKnownAsItem, index) => (
      <p
        id={alsoKnownAsItem.id}
        key={index}
      >{alsoKnownAsItem}</p>
    ));

  const personMovieCreditsList = personMovieCredits.map((personMovieCredit, index) => (
    <TrendsItem
      id={personMovieCredit.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${personMovieCredit.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${personMovieCredit.id}`}
      name={personMovieCredit.original_title}
      src={`http://image.tmdb.org/t/p/w1280${personMovieCredit.backdrop_path}`}
      alt={personMovieCredit.original_title}
    />
  ));

  return (
    <section className={classNames("person-details", className)}>
      <div className="person-details__container">
        {
          !personDetails ?
            <Preloader /> :
            <div className="person-details__person">
              <div className="person-details__contacts">
                <Image
                  className="person-details__avatar"
                  src={`http://image.tmdb.org/t/p/w1280${personDetails.profile_path}`}
                  alt={personDetails.name}
                />
                <div className="person-details__favorite-container">
                  <FavoriteStar onClick={() => onSendFavoritePerson(localStorage.getItem('id'), personDetails.id)} />
                </div>
                <h3>Personal info</h3>
                <h4 className="person-details__quaternary-title">Known For</h4>
                {
                  !personDetails.known_for_department ?
                    <ErrorMessage message="We don't know any information" /> :
                    <p>{personDetails.known_for_department}</p>
                }
                <h4 className="person-details__quaternary-title">Gender</h4>
                {
                  personDetails.gender === 1 ?
                    <p>Female</p> :
                    <p>Male</p>
                }
                <h4 className="person-details__quaternary-title">Birthday</h4>
                {
                  !personDetails.birthday ?
                    <ErrorMessage message="We don't know the birthday" /> :
                    <p>{personDetails.birthday}</p>
                }
                <h4 className="person-details__quaternary-title">Place of Birth</h4>
                {
                  !personDetails.place_of_birth ?
                    <ErrorMessage message="We don't know the place of birth" /> :
                    <p>{personDetails.place_of_birth}</p>
                }
                <h4 className="person-details__quaternary-title">Also Known As</h4>
                {
                  alsoKnownAsList.length === 0 ?
                    <ErrorMessage message="List is empty" /> :
                    <>{alsoKnownAsList}</>
                }
              </div>
              <div className="person-details__main-info">
                <h2>{personDetails.name}</h2>
                <h3>Biography</h3>
                <p className="person-details__biography">
                  {
                    !personDetails.biography ?
                      <ErrorMessage message="Biography is empty" /> :
                      <>{personDetails.biography}</>
                  }
                </p>
                <div className="person-details__known-for">
                  <h3>Known For</h3>
                  <div className="person-details__known-for-info">
                    {
                      personMovieCreditsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{personMovieCreditsList}</>
                    }
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </section>
  );
};

export default PersonDetails;