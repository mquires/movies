import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ChatMessageItem from '../ChatMessageItem';

import './chat-message-me.scss';

const ChatMessageMe = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <ChatMessageItem
      className={classNames("chat-message-me", className)}
      {...restProps}
    />
  );
}

export default ChatMessageMe;