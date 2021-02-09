import React from 'react';
import PropTypes from 'prop-types';

import PageComponent from '../../components/page-component';
import Avatar from '../../components/avatar';

import './profile.scss';
import Item from '../../components/items/item';
import MovieTvItem from '../../components/items/movie-tv-item';
import ActorItem from '../../components/items/actor-item/ActorItem';
import ProfileSectionInfo from './profile-section-info/ProfileSectionInfo';

const Profile = () => {
  return (
    <PageComponent
      className="profile"
      title="Profile"
    >
      <div className="profile__main-info">
        <Avatar
          className="profile__avatar"
        />
        <div className="profile__main-info-title">
          <p className="profile__category">profile</p>
          <h2 className="profile__username">User name</h2>
        </div>
      </div>
      <ProfileSectionInfo title="Liked movies">
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
        <MovieTvItem
          src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78"
          alt="item"
          title="Walli-e"
        />
      </ProfileSectionInfo>
      <ProfileSectionInfo title="Favourite actors">
        <ActorItem
          src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
          alt="item"
          title="Johnny Depp"
        />
        <ActorItem
          src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
          alt="item"
          title="Johnny Depp"
        />
        <ActorItem
          src="http://t2.gstatic.com/images?q=tbn:ANd9GcQRmj9gO7hiNSpI6D7-3UE5ejpqfRdocu1jEEB-HIkBivMZz0GJ1-1-3mBR5Ept"
          alt="item"
          title="Johnny Depp"
        />
      </ProfileSectionInfo>
    </PageComponent>
  );
};

export default Profile;