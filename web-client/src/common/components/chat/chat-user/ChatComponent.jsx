import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Button from '../../buttons/main-button';
import EntryField from '../../fields/EntryField';
import BUTTON_TYPES from '../../../constants/button-types';
import Input from '../../input';
import ChatUser from './ChatUser';
import ChatMessageFriend from '../chat-messages-items/chat-message-friend';
import ChatMessageMe from '../chat-messages-items/chat-message-me';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

const ChatUsersForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <EntryField
        name={"name"}
        component={Input}
        placeholder="name"
      />
      <Button
        caption="Submit"
        type={BUTTON_TYPES.SUBMIT}
      />
    </form>
  );
};

const ChatUsersReduxForm = reduxForm({ form: 'chat-users' })(ChatUsersForm);

const ChatComponent = (props) => {
  const {
    className,
    stateMessages,
    usersList,
    messages,
    inputMessage,
    onUserSelected,
    handleInputChange,
    handleMessageSent,
    onSendChatUser,
    users,
    ...restProps
  } = props;

  /*{
              messages.map((i) => <ChatMessageFriend caption={i.message}></ChatMessageFriend>)
            }*/

console.log(messages)

  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__users">
          <ChatUsersReduxForm onSubmit={onSendChatUser} />
          {users.map((userItem, index) => (
            <ChatUser
              id={userItem.id}
              key={index}
              onClick={() => onUserSelected(userItem.email)}
              name={userItem.email}
              src={!userItem.avatarImage ? noAvatar : userItem.avatarImage}
              alt={userItem.email}
            />
          ))}
        </div>
        <div className="chat__messenger">
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
                    <ChatMessageFriend
                      id={message.id}
                      key={index}
                      caption={message.message}
                      //src={localStorage.getItem('avatarImage') == "null" ? noAvatar : localStorage.getItem('avatarImage')}
                      alt=""
                    />
                }
              </>
            ))}
            {stateMessages}
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
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;