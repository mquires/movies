import React from 'react';
import io from 'socket.io-client';
import Button from '../buttons/main-button';
import ChatMessageFriend from './chat-messages-items/chat-message-friend';
import ChatMessageMe from './chat-messages-items/chat-message-me';
import ChatUser from './chat-user';

import './chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: '',
      messages: [],
      email: ''
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3500/';
    this.socket = io.connect(url, {
      query: {
        token: localStorage.getItem('token')
      }
    });

    this.socket.on('new-message', (newMessage) => {
      this.setState({ messages: this.state.messages.concat(newMessage) });
    });
  }

  handleInputChange(e) {
    this.setState({ inputMessage: e.target.value })
  }

  handleMessageSent() {
    if (!this.state.inputMessage) return;
    this.socket.emit('new-message', this.state.inputMessage);
    this.setState({ inputMessage: '' });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <div className="chat">
        <div className="chat__container">
          <div className="chat__users">
            <ChatUser navLink="#" name="Kevin Man" />
            <ChatUser navLink="#" name="Kevin Man" />
            <ChatUser navLink="#" name="Kevin Man" />
            <ChatUser navLink="#" name="Kevin Man" />
            <ChatUser navLink="#" name="Kevin Man" />
            <ChatUser navLink="#" name="Kevin Man" />
          </div>
          <div className="chat__messenger">
            <div className="chat__messages">
              {this.state.messages.map((message, index) => (
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
              ))}
            </div>
            <div className="chat__send-container">
              <div className="chat__send-container-wrapper">
                <textarea
                  className="chat__textarea"
                  placeholder="Type a message..."
                  value={this.state.inputMessage}
                  onChange={this.handleInputChange.bind(this)}
                />
                <Button
                  type="submit"
                  onClick={this.handleMessageSent.bind(this)}
                  caption="Send"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Chat;