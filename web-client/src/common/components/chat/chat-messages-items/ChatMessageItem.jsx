import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Avatar from '../../avatar';

import './chat-message-item.scss';

const ChatMessageItem = (props) => {
  const {
    className,
    caption,
    name
  } = props;

  return (
    <div className="chat-message-item">
      <Avatar className="chat-message-item__avatar"
        src="https://cdn.vox-cdn.com/thumbor/zFJuBWv5NjSeVilWJntvQcgji5M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg"
        alt="avatar"
      />
      <div className={classNames("chat-message-item__text", className)}>
        {caption}
      </div>
    </div>
  );
}

export default ChatMessageItem;