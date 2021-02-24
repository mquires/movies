import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { sendFeedbackRequest } from '../../../../redux/feedback-reducer';

import Feedback from '../component';

class FeedbackContainer extends React.Component {
  onSendFeedback(feedback) {
    console.log(feedback);

    const {
      sendFeedbackRequest
    } = this.props;

    const {
      name,
      email,
      comments,
      feedbackType
    } = feedback;

    sendFeedbackRequest(name, email, comments, feedbackType)
  }

  render() {
    return (
      <Feedback
        {...this.props}
        onSendFeedback={this.onSendFeedback.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, {
    sendFeedbackRequest
  }),
  withRouter
)(FeedbackContainer);