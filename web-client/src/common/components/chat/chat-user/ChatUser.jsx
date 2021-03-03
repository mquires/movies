import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Avatar from '../../avatar';

import './chat-user.scss';

const ChatUser = (props) => {
  const {
    className,
    navLink,
    name
  } = props;

  return (
    <NavLink
      className={classNames("chat-user", className)}
      to={navLink}
    >
      <Avatar
        src="https://cdn.vox-cdn.com/thumbor/zFJuBWv5NjSeVilWJntvQcgji5M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg"
        alt="avatar"
      />
      <p>{name}</p>
    </NavLink>
  );
}

export default ChatUser;
