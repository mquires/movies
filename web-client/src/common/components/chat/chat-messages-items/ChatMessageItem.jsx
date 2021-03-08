import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Avatar from '../../avatar';

import './chat-message-item.scss';

const ChatMessageItem = (props) => {
  const {
    className,
    caption,
    ...restProps
  } = props;

  return (
    <div className="chat-message-item">
      <Avatar className="chat-message-item__avatar"
        {...restProps}
      />
      <div className={classNames("chat-message-item__text", className)}>
        {caption}
      </div>
    </div>
  );
}

export default ChatMessageItem;