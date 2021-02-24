import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getFeedbacksRequest } from '../../../../../redux/feedback-reducer';

import AdminPanelReports from '../component';

class AdminPanelReportsContainer extends React.Component {
  componentDidMount() {
    const {
      getFeedbacksRequest
    } = this.props;

    getFeedbacksRequest();
  }

  render() {
    return (
      <AdminPanelReports {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedbackList: state.feedback.feedbackList
  }
}

export default compose(
  connect(mapStateToProps, {
    getFeedbacksRequest
  }),
  withRouter
)(AdminPanelReportsContainer);