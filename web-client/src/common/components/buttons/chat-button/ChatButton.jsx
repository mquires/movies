import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../main-button';
import Icon from '../../icon';
import Chat from '../../chat/Chat';

import chatIcon from '../../../../assets/icons/chat.svg';
import arrowIcon from '../../../../assets/icons/arrow.svg';

import './chat-button.scss';

const ChatButton = (props) => {
  const {
    className
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="chat-button__container">
      {isOpen && <Chat />}
      <div className="chat-button__wrapper">
        {isOpen && <Icon
          className="chat-button__arrow"
          glyph={arrowIcon.id}
          viewBox={arrowIcon.viewBox}
        />}
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
      </div>
    </div>
  );
}

ChatButton.propTypes = {
  className: PropTypes.string,
};

ChatButton.defaultProps = {
  className: undefined,
};

export default ChatButton;