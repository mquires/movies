import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from '../../components/icon';
import Avatar from '../avatar';
import UserApplicationVerification from '../popups/verification-popups/user-application-verification';

import emailIcon from '../../../assets/icons/email.svg';
import categoryIcon from '../../../assets/icons/category.svg';
import countryIcon from '../../../assets/icons/flag.svg';
import generalIcon from '../../../assets/icons/info.svg';
import wikiArticleIcon from '../../../assets/icons/article.svg';
import websiteIcon from '../../../assets/icons/website.svg';
import socialNetworksIcon from '../../../assets/icons/social-network.svg';

import './user-application-item.scss';

const UserApplicationItem = (props) => {
  const {
    className,
    email,
    name,
    category,
    country,
    general,
    wikiArticle,
    website,
    socialNetworks,
    ...restProps
  } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const closeModal = () => setIsOpenModal(false);

  return (
    <article
      className={classNames("user-application-item", className)}
      onClick={toggleModal}
    >
      {
        isOpenModal &&
        <UserApplicationVerification
          open={toggleModal}
          onRequestClose={closeModal}
        />
      }
      <div className="user-application-item__user">
        <Avatar
          className="user-application-item__avatar"
          {...restProps}
        />
        <div className="user-application-item__user-data">
          <h3>{name}</h3>
          <div className="user-application-item__data">
            <Icon
              glyph={emailIcon.id}
              viewBox={emailIcon.viewBox}
            />
            <p>{email}</p>
          </div>
          <h4>Information</h4>
          {
            category &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={categoryIcon.id}
                  viewBox={categoryIcon.viewBox}
                />
                <h5>Category</h5>
              </div>
              <p>{category}</p>
            </>
          }
          {
            country &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={countryIcon.id}
                  viewBox={countryIcon.viewBox}
                />
                <h5>Country</h5>
              </div>
              <p>{country}</p>
            </>
          }
          {
            general &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={generalIcon.id}
                  viewBox={generalIcon.viewBox}
                />
                <h5>General Info</h5>
              </div>
              <p>{general}</p>
            </>
          }
          {
            wikiArticle &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={wikiArticleIcon.id}
                  viewBox={wikiArticleIcon.viewBox}
                />
                <h5>Wiki Article</h5>
              </div>
              <p>{wikiArticle}</p>
            </>
          }
          {
            website &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={websiteIcon.id}
                  viewBox={websiteIcon.viewBox}
                />
                <h5>Website</h5>
              </div>
              <p>{website}</p>
            </>
          }
          {
            socialNetworks &&
            <>
              <div className="user-application-item__data">
                <Icon
                  glyph={socialNetworksIcon.id}
                  viewBox={socialNetworksIcon.viewBox}
                />
                <h5>Social Networks</h5>
              </div>
              <p>{socialNetworks}</p>
            </>
          }
        </div>
      </div>
    </article>
  );
};

export default UserApplicationItem;