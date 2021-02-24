import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './feedback-item.scss';

const FeedbackItem = (props) => {
  const {
    className
  } = props;

  return (
    <article className={classNames("feedback-item", className)}>

    </article>
  );
};

export default FeedbackItem;