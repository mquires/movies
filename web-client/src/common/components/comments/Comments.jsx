import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import CommentsForm from '../forms/comments-form';
import ErrorMessage from '../error-message';

import './comments.scss';

const Comments = (props) => {
  const {
    className,
    title,
    children,
    onSubmit,
    match,
    userId
  } = props;

  return (
    <div className={classNames("comments", className)}>
      <h3 className="comments__title">{title}</h3>
      {
        userId != match.params.id ?
          <ErrorMessage className="comments__error" message="You can't send any posts" /> :
          <CommentsForm
            onSubmit={onSubmit}
            placeholder="Write your post"
          />
      }
      {children}
    </div>
  );
};

export default withRouter(Comments);