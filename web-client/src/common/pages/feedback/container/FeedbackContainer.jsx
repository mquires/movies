import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { sendFeedbackRequest } from '../../../../redux/feedback-reducer';
import { reset } from "redux-form";

import Feedback from '../component';
import LoginPopup from '../../../components/popups/login-popup';

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

    sendFeedbackRequest(name, email, comments, feedbackType)
    //todo  .then(() => <LoginPopup />);

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