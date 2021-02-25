import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from '../../components/icon';

import userIcon from '../../../assets/icons/user.svg';

import './support-item.scss';

const SupportItem = (props) => {
  const {
    className,
    name,
    problem,
    details,
    createdAt
  } = props;

  return (
    <article className={classNames("support-item", className)}>
      <div className="support-item__icon-text">
        <Icon glyph={userIcon.id} viewBox={userIcon.viewBox} />
        {name}
      </div>
      <h3>Problem:</h3>
      <p>{problem}</p>
      <h3>Created at:</h3>
      <p>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <div className="support-item__details">
        <h3>Details:</h3>
        <p>{details}</p>
      </div>
    </article>
  );
};

export default SupportItem;