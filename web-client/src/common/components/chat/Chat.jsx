import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { sendMessageRequest, getMessagesRequest } from '../../../redux/messages-reducer';
import { getUsersRequest, getUserByEmailRequest } from '../../../redux/users-reducer';

import ChatComponent from './chat-user/ChatComponent';
import ChatMessageFriend from './chat-messages-items/chat-message-friend';
import ChatMessageMe from './chat-messages-items/chat-message-me';

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
      messagesList: [],
      userByEmail: null,
      typer: ''
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3500/';
    this.socket = io.connect(url, {
      query: {
        token: localStorage.getItem('token')
      }
    });

    this.socket.on('new-message', (data) => {
      this.setState({
        messages: this.state.messages.concat(
          this.props.userByEmail.map((userByEmail, index) => (
            <ChatMessageFriend
              id={userByEmail.id}
              key={index}
              src={!userByEmail.avatarImage ? noAvatar : userByEmail.avatarImage}
              caption={data.message}
              alt=""
            />
          ))
        )
      });
    });

    this.socket.on('user typing', () => {
      this.setState({ typer: `${this.state.receiver} is typing...` });
    });

    this.socket.on('user stopped typing', () => {
      this.setState({ typer: '' });
    });

    this.socket.emit('user_connected', localStorage.getItem('email'));

    this.socket.on('user_connected', () => {
      this.props.getUsersRequest();
    })
  }

  onUserSelected(username) {
    const {
      getMessagesRequest,
      getUserByEmailRequest
    } = this.props;

    this.setState({ receiver: username });
    getMessagesRequest(localStorage.getItem('email'), username);
    this.setState({ messages: [] });

    getUserByEmailRequest(username);
    this.setState({ typer: '' });
  }

  handleInputChange(e) {
    this.setState({ inputMessage: e.target.value });

    e.target.onkeyup = e => {
      this.socket.emit('user typing');

      if (e.target.value === '') {
        this.socket.emit('user stopped typing');
      }
    };
  }

  handleMessageSent(e) {
    const {
      sendMessageRequest
    } = this.props;

    if (!this.state.inputMessage) return;
    this.socket.emit('send-message', {
      senderEmail: localStorage.getItem('email'),
      receiverEmail: this.state.receiver,
      message: this.state.inputMessage
    });

    sendMessageRequest(localStorage.getItem('email'), this.state.receiver, this.state.inputMessage);

    this.setState({
      messages: this.state.messages.concat(
        <ChatMessageMe
          key={e.target.key}
          caption={this.state.inputMessage}
          src={localStorage.getItem('avatarImage') == "null" ? noAvatar : localStorage.getItem('avatarImage')}
          alt=""
        />
      )
    });

    this.setState({ inputMessage: '' });
    this.socket.emit('user stopped typing');
  }

  componentWillUnmount() {
    this.socket.close();
  }

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
        users={this.props.users}
        receiver={this.state.receiver}
        userByEmail={this.props.userByEmail}
        typer={this.state.typer}
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    users: state.users.users,
    userByEmail: state.users.userByEmail
  }
}

export default connect(mapStateToProps,
  {
    sendMessageRequest,
    getMessagesRequest,
    getUsersRequest,
    getUserByEmailRequest
  })(Chat);