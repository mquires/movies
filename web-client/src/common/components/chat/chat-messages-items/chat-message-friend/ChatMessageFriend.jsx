import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ChatMessageItem from '../ChatMessageItem';

import './chat-message-friend.scss';

const ChatMessageFriend = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <ChatMessageItem
      className={classNames("chat-message-friend", className)}
      {...restProps}
    />
  );
}

export default ChatMessageFriend;