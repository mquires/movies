import React from 'react';
import { connect } from 'react-redux';

import ChatMessageFriend from '../chat-messages-items/chat-message-friend';
import ChatMessageMe from '../chat-messages-items/chat-message-me';
import Preloader from '../../preloader';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messagesList: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.messagesList !== this.props.messagesList) {
      console.log('new props', this.props.messagesList)
      
      console.log('prevState', prevState)
      this.setState(prevState => ({
        messagesList: [...prevState.messagesList, this.props.messagesList[0]]
      }))
      console.log('new state', this.state.messagesList)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.messagesList !== nextProps.messagesList) {
      console.log('yes')
      this.setState({
        messagesList: this.props.messagesList
      })
      console.log('nextProps.messagesList', nextProps.messagesList)
      console.log('state 123213 rerender', this.state.messagesList)

      return true;
    }
    console.log('no')
    return false;
  }

  render() {
    console.log('state 123213', this.state.messagesList)
    console.log('state props', this.props.messagesList)
    return (
      <div className="chat__messages">
        {
          this.props.messagesList.map((i) => <ChatMessageFriend caption={i.message}></ChatMessageFriend>)
        }
        {this.props.messages}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(ChatMessages);