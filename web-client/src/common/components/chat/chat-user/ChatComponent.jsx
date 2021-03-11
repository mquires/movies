import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../../buttons/main-button';
import ChatUser from './ChatUser';
import ChatMessageFriend from '../chat-messages-items/chat-message-friend';
import ChatMessageMe from '../chat-messages-items/chat-message-me';
import Preloader from '../../preloader';
import Avatar from '../../avatar';
import Icon from '../../icon';

import noAvatar from '../../../../assets/images/no-avatar.jpg';
import selectChatIcon from '../../../../assets/icons/chat_2.svg';

import '../chat.scss';

const ChatComponent = (props) => {
  const {
    className,
    stateMessages,
    messages,
    inputMessage,
    onUserSelected,
    handleInputChange,
    handleMessageSent,
    users,
    userByEmail,
    typer,
    receiver
  } = props;

  return (
    <div className={classNames("chat", className)}>
      <div className="chat__container">
        <div className="chat__users">
          {users.map((userItem, index) => (
            <ChatUser
              id={userItem.id}
              key={index}
              onClick={() => onUserSelected(userItem.email)}
              name={userItem.email}
              securityName={userItem.name}
              src={!userItem.avatarImage ? noAvatar : userItem.avatarImage}
              alt={userItem.email}
            />
          ))}
        </div>
        <div className="chat__messenger">
          {
            receiver == '' ?
              <div className="chat__messenger-empty-container">
                <div className="chat__messenger-empty">
                  <Icon
                    className="chat__messenger-empty-icon"
                    glyph={selectChatIcon.id}
                    viewBox={selectChatIcon.viewBox}
                  />
                  <p className="chat__messenger-empty-text">Select a dialog</p>
                </div>
              </div> :
              <>
                <div className="chat__messenger-title">
                  {!userByEmail ?
                    <Preloader /> :
                    userByEmail.map((userByEmailItem, index) => (
                      <Avatar
                        src={!userByEmailItem.avatarImage ? noAvatar : userByEmailItem.avatarImage}
                        alt={userByEmailItem.name}
                      />
                    ))
                  }
                  <p>{!userByEmail ? <Preloader /> : userByEmail[0].name}</p>
                </div>
                <div className="chat__messages">
                  {messages.map((message, index) => (
                    <>
                      {
                        localStorage.getItem('email') == message.senderEmail ?
                          <ChatMessageMe
                            id={message.id}
                            key={index}
                            caption={message.message}
                            src={localStorage.getItem('avatarImage') == "null" ? noAvatar : localStorage.getItem('avatarImage')}
                            alt=""
                          /> :
                          <>
                            {!userByEmail ?
                              <Preloader /> :
                              userByEmail.map((userByEmailItem, index) => (
                                <ChatMessageFriend
                                  id={userByEmailItem.id}
                                  key={index}
                                  src={!userByEmailItem.avatarImage ? noAvatar : userByEmailItem.avatarImage}
                                  caption={message.message}
                                  alt=""
                                />
                              ))
                            }
                          </>
                      }
                    </>
                  ))}
                  {stateMessages}
                  {typer != '' && <p className="chat__messenger-istyping">{typer}</p>}
                </div>
                <div className="chat__send-container">
                  <div className="chat__send-container-wrapper">
                    <textarea
                      className="chat__textarea"
                      placeholder="Type a message..."
                      value={inputMessage}
                      onChange={handleInputChange}
                    />
                    <Button
                      type="submit"
                      onClick={handleMessageSent}
                      caption="Send"
                    />
                  </div>
                </div>
              </>
          }
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;