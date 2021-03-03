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
    <div className="chat-message-friend__side">
      <ChatMessageItem
        className={classNames("chat-message-friend", className)}
        {...restProps}
      />
    </div>
  );
}

export default ChatMessageFriend;