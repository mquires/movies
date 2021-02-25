import React from 'react';
import { connect } from 'react-redux';
import { sendSupportRequest } from '../../../../redux/support-reducer';
import { reset } from "redux-form";

import Support from '../component';

class SupportContainer extends React.Component {
  onSendSupport(support, dispatch) {
    const {
      sendSupportRequest
    } = this.props;

    const {
      name,
      problem,
      details
    } = support;

    sendSupportRequest(name, problem, details);
    dispatch(reset("support"));
  }

  render() {
    return (
      <Support {...this.props} onSubmit={this.onSendSupport.bind(this)} />
    );
  }
};

export default connect(null, { sendSupportRequest })(SupportContainer);