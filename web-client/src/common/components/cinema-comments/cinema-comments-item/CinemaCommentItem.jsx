import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Avatar from '../../avatar';

import './cinema-comment-item.scss';

const CinemaCommentItem = (props) => {
  const {
    className,
    name,
    date,
    comment,
    ...restProps
  } = props;

  return (
    <div className={classNames("cinema-comment-item", className)}>
      <Avatar {...restProps} />
      <div className="cinema-comment-item__content">
        <div className="cinema-comment-item__content-title">
          <p className="cinema-comment-item__name">{name}</p>
          <p className="cinema-comment-item__date">{date}</p>
        </div>
        <p className="cinema-comment-item__comment">{comment}</p>
      </div>
    </div>
  );
};

export default CinemaCommentItem;