import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../avatar';

import './comment-item.scss';

const CommentItem = (props) => {
  const {
    className,
    comment,
    name,
    ...restProps
  } = props;

  return (
    <div className={classNames("comment-item", className)}>
      <Avatar {...restProps} />
      <div className="comment-item__info">
        <p className="comment-item__name">{name}</p>
        <p className="comment-item__comment">{comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;