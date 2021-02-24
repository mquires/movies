import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from '../../components/icon';

import emailIcon from '../../../assets/icons/email.svg';
import userIcon from '../../../assets/icons/user.svg';

import './feedback-item.scss';

const FeedbackItem = (props) => {
  const {
    className,
    email,
    name,
    feedback,
    feedbackType,
    createdAt
  } = props;

  return (
    <article className={classNames("feedback-item", className)}>
      <div className="feedback-item__info-container">
        <div className="feedback-item__user-info">
          <div className="feedback-item__icon-text">
            <Icon glyph={userIcon.id} viewBox={userIcon.viewBox} />
            {name}
          </div>
          <div className="feedback-item__icon-text">
            <Icon glyph={emailIcon.id} viewBox={emailIcon.viewBox} />
            {email}
          </div>
        </div>
        <div className="feedback-item__created-at">
          {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
      <h4 className="feedback-item__feedback-title">Feedback:</h4>
      <p>{feedback}</p>
      <h4 className="feedback-item__feedback-title">Feedback type:</h4>
      <p>{feedbackType}</p>
    </article>
  );
};

export default FeedbackItem;