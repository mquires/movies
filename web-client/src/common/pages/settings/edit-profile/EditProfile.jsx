import React from 'react';
import PropTypes from 'prop-types';

import Settings from '../component';
import EditProfileForm from '../../../components/forms/edit-profile-form';
import Avatar from '../../../components/avatar';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './edit-profile.scss';
import Preloader from '../../../components/preloader';

const EditProfile = (props) => {
  const {
    onSendEditProfile,
    successSending,
    name,
    additionalUserData
  } = props;

  const {
    avatarImage,
    nickname,
    website,
    bio,
    phone,
    gender
  } = additionalUserData;

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="Submit successfully"
    >
      <Settings>
        <div className="edit-profile__name">
          <Avatar
            src={!avatarImage ? noAvatar : avatarImage}
            alt={name}
          />
          <h3 className="edit-profile__name-title">{name}</h3>
        </div>
        <EditProfileForm
          className="edit-profile__form"
          onSubmit={onSendEditProfile}
          nickname={nickname}
          website={website}
          bio={bio}
          phone={phone}
          gender={gender}
        />
      </Settings>
    </PageWithSuccessMessage>
  );
};

export default EditProfile;