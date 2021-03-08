import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import moment from 'moment';

import PageComponent from '../../../components/page-components/page-component';
import Avatar from '../../../components/avatar';
import MovieTvItem from '../../../components/items/movie-tv-item';
import ActorItem from '../../../components/items/actor-item/ActorItem';
import Comments from '../../../components/comments';
import CommentItem from '../../../components/comment-item';
import Icon from '../../../components/icon';
import Preloader from '../../../components/preloader';
import ReportPopup from '../../../components/popups/report-popup';
import EmptyListMessage from '../../../components/empty-list-message';

import likesIcon from '../../../../assets/icons/favorite.svg';
import commentsIcon from '../../../../assets/icons/comment.svg';
import reportIcon from '../../../../assets/icons/report.svg';
import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './profile.scss';
import DetailItemSectionList from '../../../components/detail-item-section-list';

const Profile = (props) => {
  const {
    userPosts,
    onSendPost,
    user,
    onSendReport,
    favoritePerson,
    favoriteMovie
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const userPostsList = userPosts.map((userPost, index) => (
    <CommentItem
      id={userPost.id}
      key={index}
      name={userPost.name}
      comment={userPost.post}
      src={!user.avatarImage ? noAvatar : user.avatarImage}
      alt={user.email}
    />
  ));

  const favoritePersonsList = favoritePerson?.map((favoritePersonItem, index) => (
    <ActorItem
      id={favoritePersonItem.id}
      key={index}
      navLink={`${ROUTES.PERSON_ITEM}/${favoritePersonItem.personId}`}
      src={`http://image.tmdb.org/t/p/w1280${favoritePersonItem.profile_path}`}
      alt={favoritePersonItem.name}
      title={favoritePersonItem.name}
    />
  ));

  const favoriteMoviesList = favoriteMovie?.map((favoriteMovieItem, index) => (
    <MovieTvItem
      id={favoriteMovieItem.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${favoriteMovieItem.movieId}`}
      src={`http://image.tmdb.org/t/p/w1280${favoriteMovieItem.backdrop_path}`}
      alt={favoriteMovieItem.original_title}
      title={favoriteMovieItem.original_title}
    />
  ));

  return (
    <PageComponent
      className="profile"
      title="Profile"
    >
      {
        isOpen &&
        <ReportPopup
          open={toggleMenu}
          onRequestClose={closeMenu}
          onSubmit={onSendReport}
        />
      }
      {
        !user ?
          <Preloader /> :
          <>
            <div className="profile__main-info">

              <div className="profile__avatar-container">
                <Avatar
                  className="profile__avatar-image"
                  src={!user.avatarImage ? noAvatar : user.avatarImage}
                  alt="avatar"
                />
                <div className="profile__avatar-overlay">
                  <div className="profile__avatar-button">
                    <div className="profile__send-photo">
                      <div className="profile__send-photo-form">
                        <label className="profile__send-photo-label">
                          <i className="material-icons">attach_file</i>
                          <span className="profile__send-photo-title">Add a file</span>
                          <input type="file" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__main-info-wrapper">
                <div className="profile__main-info-title">
                  <p className="profile__category">profile</p>
                  <h2 className="profile__username">{user.name}</h2>
                </div>
                <div className="profile__stats-container">
                  <p className="profile__stats">Created: {moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
                  <p className="profile__stats">
                    <Icon
                      className="profile__icon-likes"
                      glyph={likesIcon.id}
                      viewBox={likesIcon.viewBox}
                    />153</p>
                  <p className="profile__stats">
                    <Icon
                      className="profile__icon-comments"
                      glyph={commentsIcon.id}
                      viewBox={commentsIcon.viewBox}
                    />1544</p>
                  <div
                    className="profile__report"
                    onClick={toggleMenu}
                  >
                    <Icon
                      glyph={reportIcon.id}
                      viewBox={reportIcon.viewBox}
                      className="profile__icon-report"
                    />
                    <p>Report</p>
                  </div>
                </div>
              </div>
            </div>
            <Comments
              className="profile__posts"
              title="Posts"
              onSubmit={onSendPost}
            >
              {userPostsList.length === 0 ? <EmptyListMessage /> : userPostsList}
            </Comments>
            <DetailItemSectionList title="Favorite movies">
              {favoriteMoviesList.length === 0 ? <EmptyListMessage /> : favoriteMoviesList}
            </DetailItemSectionList>
            <DetailItemSectionList title="Favorite actors">
              {favoritePersonsList.length === 0 ? <EmptyListMessage /> : favoritePersonsList}
            </DetailItemSectionList>
          </>
      }
    </PageComponent>
  );
};

export default Profile;