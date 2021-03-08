import React from 'react';
import { reduxForm } from 'redux-form';
import io from 'socket.io-client';
import Button from '../buttons/main-button';
import ChatMessageFriend from './chat-messages-items/chat-message-friend';
import ChatMessageMe from './chat-messages-items/chat-message-me';
import ChatUser from './chat-user';
import EntryField from '../fields/EntryField';
import Preloader from '../preloader';

import './chat.scss';
import Input from '../input';
import BUTTON_TYPES from '../../constants/button-types';

import { sendMessageRequest, getMessagesRequest } from '../../../redux/messages-reducer';
import { getUsersRequest } from '../../../redux/users-reducer';
import { connect } from 'react-redux';
import ChatMessages from './chat-messages/ChatMessages';
import ChatComponent from './chat-user/ChatComponent';

import noAvatar from '../../../assets/images/no-avatar.jpg';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: '',
      messages: [],
      email: '',
      usersList: [],
      receiver: '',
      sender: '',
      messagesList: []
    }
  }

  componentDidMount() {
    const {
      getMessagesRequest
    } = this.props;

    const url = 'http://localhost:3500/';
    this.socket = io.connect(url, {
      query: {
        token: localStorage.getItem('token')
      }
    });

    /*  this.socket.on('new-message', (newMessage) => {
        this.setState({ messages: this.state.messages.concat(newMessage) });
      });*/

    this.socket.on('new-message', (data) => {
      console.log('dsdsdsdsdsdsd', data)

      console.log(data.message)
      this.setState({
        messages: this.state.messages.concat(
          <ChatMessageFriend
            caption={data.message}
            alt=""
          />
        )
      });
    });

    this.socket.emit('user_connected', localStorage.getItem('email'));

    this.socket.on('user_connected', (username) => {
      console.log(username)

      //todo this.setState({ usersList: this.state.usersList.concat(username) });

      this.props.getUsersRequest();
    })

  }

  onUserSelected(username) {
    const {
      getMessagesRequest
    } = this.props;
    console.log('username: ', username)

    this.setState({ receiver: username });

    //getMessagesRequest(this.state.sender, this.state.receiver);

    getMessagesRequest(localStorage.getItem('email'), username);

    this.setState({ messages: [] })
  }

  handleInputChange(e) {
    this.setState({ inputMessage: e.target.value })
  }

  handleMessageSent() {
    const {
      sendMessageRequest
    } = this.props;

    if (!this.state.inputMessage) return;
    this.socket.emit('send-message', {
      senderEmail: localStorage.getItem('email'),
      receiverEmail: this.state.receiver,
      message: this.state.inputMessage
    });

    //  sendMessageRequest(this.state.sender, this.state.receiver, this.state.inputMessage)
    sendMessageRequest(localStorage.getItem('email'), this.state.receiver, this.state.inputMessage)

    this.setState({
      messages: this.state.messages.concat(
        <ChatMessageMe
          caption={this.state.inputMessage}
          src={localStorage.getItem('avatarImage') == "null" ? noAvatar : localStorage.getItem('avatarImage')}
          alt=""
        />
      )
    });

    this.setState({ inputMessage: '' });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  onSendChatUser(user) {
    console.log('usern123ame', user.name)

    //this.socket.emit('user_connected', user.name);
    //this.socket.emit('user_connected', localStorage.getItem('email'));
    this.setState({ sender: user.name });
  }

  /* {this.state.messages.map((message, index) => (
                <>
                  {
                    localStorage.getItem('email') == message.email ?
                      <ChatMessageMe
                        id={message.id}
                        key={index}
                        caption={message.message}
                      /> :
                      <ChatMessageFriend
                        id={message.id}
                        key={index}
                        caption={message.message}
                      />
                  }
                </>
              ))}*/


  render() {
    return (
      <ChatComponent
        usersList={this.state.usersList}
        stateMessages={this.state.messages}
        messages={this.props.messages}
        inputMessage={this.state.inputMessage}
        onUserSelected={this.onUserSelected.bind(this)}
        handleInputChange={this.handleInputChange.bind(this)}
        handleMessageSent={this.handleMessageSent.bind(this)}
        onSendChatUser={this.onSendChatUser.bind(this)}
        users={this.props.users}
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    users: state.users.users
  }
}

export default connect(mapStateToProps, { sendMessageRequest, getMessagesRequest, getUsersRequest })(Chat);