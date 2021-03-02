import React from 'react';
import io from 'socket.io-client';

import './chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: '',
      messages: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3500/';
    this.socket = io.connect(url);

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
        <div className="chat__messages">
          {this.state.messages.map((message, index) => (
            <div
              id={message.id}
              key={index}
            >
              {message}
            </div>
          ))}
        </div>
        <textarea placeholder="write a message" value={this.state.inputMessage} onChange={this.handleInputChange.bind(this)} />
        <button type="submit" onClick={this.handleMessageSent.bind(this)}>send</button>
      </div>
    )
  }
};

export default Chat;