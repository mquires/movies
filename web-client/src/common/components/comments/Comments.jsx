import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CommentsForm from '../forms/comments-form';

import './comments.scss';

const Comments = (props) => {
  const {
    className,
    title,
    children,
    onSubmit
  } = props;

  return (
    <div className={classNames("comments", className)}>
      <h3 className="comments__title">{title}</h3>
      <CommentsForm
        onSubmit={onSubmit}
        placeholder="Write your post"
      />
      {children}
    </div>
  );
};

export default Comments;