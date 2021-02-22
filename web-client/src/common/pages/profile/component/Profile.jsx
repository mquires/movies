import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import Avatar from '../../../components/avatar';
import MovieTvItem from '../../../components/items/movie-tv-item';
import ActorItem from '../../../components/items/actor-item/ActorItem';
import SectionInfo from '../../../components/section-info';
import Comments from '../../../components/comments';
import CommentItem from '../../../components/comment-item';
import Icon from '../../../components/icon';

import likesIcon from '../../../../assets/icons/favorite.svg';
import commentsIcon from '../../../../assets/icons/comment.svg';

import './profile.scss';

const Profile = (props) => {
  const {
    userPosts,
    onSendPost
  } = props;

  const userPostsList = userPosts.map((userPost, index) => (
    <CommentItem
      id={userPost.id}
      key={index}
      comment={userPost.comment}
      src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
      alt="item"
    />
  ));

  return (
    <PageComponent
      className="profile"
      title="Profile"
    >
      <div className="profile__main-info">
        <Avatar
          className="profile__avatar"
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="avatar"
        />
        <div className="profile__main-info-wrapper">
          <div className="profile__main-info-title">
            <p className="profile__category">profile</p>
            <h2 className="profile__username">User name</h2>
          </div>
          <div className="profile__stats-container">
            <p className="profile__stats">Created: 15/44/4444</p>
            <p className="profile__stats">
              <Icon
                className="profile__likes-icon"
                glyph={likesIcon.id}
                viewBox={likesIcon.viewBox}
              />
            153
            </p>
            <p className="profile__stats">
              <Icon
                className="profile__comments-icon"
                glyph={commentsIcon.id}
                viewBox={commentsIcon.viewBox}
              />
            1544
            </p>
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
          src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
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
    </PageComponent>
  );
};

export default Profile;