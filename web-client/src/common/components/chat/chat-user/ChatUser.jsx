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
    name,
    onClick,
    securityName,
    ...restProps
  } = props;

  return (
    <div
      className={classNames("chat-user", className)}
      to={navLink}
      onClick={onClick}
    >
      <Avatar
        {...restProps}
      />
      <p className="chat-user__name">{name}</p>
      <p>{securityName}</p>
    </div>
  );
}

export default ChatUser;
