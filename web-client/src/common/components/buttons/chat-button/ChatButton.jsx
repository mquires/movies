import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../main-button';
import Icon from '../../icon';

import chatIcon from '../../../../assets/icons/chat.svg';

import './chat-button.scss';
import Chat from '../../chat/Chat';

const ChatButton = (props) => {
  const {
    className
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {
        isOpen && <Chat />
      }
      <Button
        className={classNames('chat-button', className)}
        onClick={toggleMenu}
      >
        <Icon
          className="chat-button__icon"
          glyph={chatIcon.id}
          viewBox={chatIcon.viewBox}
        />
      </Button>
    </>
  );
}

ChatButton.propTypes = {
  className: PropTypes.string,
};

ChatButton.defaultProps = {
  className: undefined,
};

export default ChatButton;