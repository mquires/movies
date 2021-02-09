import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './profile-section-info.scss';

const ProfileSectionInfo = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <div className={classNames("profile-section-info", className)}>
      <h3 className="profile-section-info__title">{title}</h3>
      <div className="profile-section-info__container">
        {children}
      </div>
    </div>
  );
};

export default ProfileSectionInfo;