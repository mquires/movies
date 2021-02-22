import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../avatar';

import './comment-item.scss';

const CommentItem = (props) => {
  const {
    className,
    comment,
    ...restProps
  } = props;

  return (
    <div className={classNames("comment-item", className)}>
      <Avatar {...restProps} />
      <p>{comment}</p>
    </div>
  );
};

export default CommentItem;