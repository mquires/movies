import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setFeedback } from '../../../../redux/feedback-reducer';

import Feedback from '../component';

class FeedbackContainer extends React.Component {
  onSendFeedback(feedback) {
    const {
      setFeedback
    } = this.props;

    setFeedback(feedback);
    console.log(feedback);
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
    setFeedback
  }),
  withRouter
)(FeedbackContainer);