import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CinemaCommentsForm from '../../forms/cinema-comments-form';
import Avatar from '../../avatar';
import CinemaCommentItem from '../cinema-comments-item';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './cinema-comments.scss';

const CinemaComments = (props) => {
  const {
    className,
    onSendComment,
    movieComments,
    oldMovieComments
  } = props;

  const movieCommentsList = movieComments.map((movieComment, index) => (
    <CinemaCommentItem
      id={movieComment.id}
      key={index}
      src={!movieComment.avatarImage ? noAvatar : movieComment.avatarImage}
      alt={movieComment.name}
      name={movieComment.name}
      date={movieComment.createdAt || 'Recently'}
      comment={movieComment.comment}
    />
  ));

  const oldMovieCommentsList = oldMovieComments.map((oldMovieComment, index) => (
    <CinemaCommentItem
      id={oldMovieComment.id}
      key={index}
      src={!oldMovieComment.User.avatarImage ? noAvatar : oldMovieComment.User.avatarImage}
      alt={oldMovieComment.User.name}
      name={oldMovieComment.User.name}
      date={oldMovieComment.createdAt}
      comment={oldMovieComment.comment}
    />
  ));

  return (
    <div className={classNames("cinema-comments"), className}>
      <h3>Comments</h3>
      <div className="cinema-comments__form-container">
        <Avatar
          src={localStorage.getItem('avatarImage') == 'null' ? noAvatar : localStorage.getItem('avatarImage')}
          alt={localStorage.getItem('email')}
        />
        <CinemaCommentsForm
          className="cinema-comments__form"
          onSubmit={onSendComment}
        />
      </div>
      <div className="cinema-comments__comments">
        {movieCommentsList}
        {oldMovieCommentsList}
      </div>
    </div>
  );
};

export default CinemaComments;