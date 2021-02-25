import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import moment from 'moment';


import PageComponent from '../../../components/page-components/page-component';
import Avatar from '../../../components/avatar';
import MovieTvItem from '../../../components/items/movie-tv-item';
import ActorItem from '../../../components/items/actor-item/ActorItem';
import SectionInfo from '../../../components/section-info';
import Comments from '../../../components/comments';
import CommentItem from '../../../components/comment-item';
import Icon from '../../../components/icon';
import Preloader from '../../../components/preloader';
import ReportPopup from '../../../components/popups/report-popup';

import likesIcon from '../../../../assets/icons/favorite.svg';
import commentsIcon from '../../../../assets/icons/comment.svg';
import reportIcon from '../../../../assets/icons/report.svg';

import './profile.scss';

const Profile = (props) => {
  const {
    userPosts,
    onSendPost,
    user,
    onSendReport
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
      src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
      alt="item"
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
              <Avatar
                className="profile__avatar"
                src="https://off-cs.ru/upload/2018/06/1451529920117.jpeg"
                alt="avatar"
              />
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
              {userPostsList}
            </Comments>
            <SectionInfo title="Liked movies">
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
              <MovieTvItem
                navLink={ROUTES.MAIN}
                src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
                alt="item"
                title="Walli-e"
              />
            </SectionInfo>
            <SectionInfo title="Favourite actors">
              <ActorItem
                navLink={ROUTES.MAIN}
                src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
                alt="item"
                title="Johnny Depp"
              />
              <ActorItem
                navLink={ROUTES.MAIN}
                src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
                alt="item"
                title="Johnny Depp"
              />
              <ActorItem
                navLink={ROUTES.MAIN}
                src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
                alt="item"
                title="Johnny Depp"
              />
            </SectionInfo>
          </>
      }
    </PageComponent>
  );
};

export default Profile;