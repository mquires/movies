import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { sendFeedbackRequest } from '../../../../redux/feedback-reducer';
import { reset } from "redux-form";

import Feedback from '../component';

class FeedbackContainer extends React.Component {
  onSendFeedback(feedback, dispatch) {
    const {
      sendFeedbackRequest
    } = this.props;

    const {
      name,
      email,
      comments,
      feedbackType
    } = feedback;

    sendFeedbackRequest(name, email, comments, feedbackType);
    dispatch(reset("feedback"));
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

export default compose(
  connect(null, {
    sendFeedbackRequest
  }),
  withRouter
)(FeedbackContainer);