import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import VerificationThirdStep from '../VerificationThirdStep';
import { setVerificationUserData } from '../../../../../../redux/users-reducer';

class VerificationThirdStepContainer extends React.Component {
  onSendVerification(verificationThirdStep) {
    const {
      setVerificationUserData,
      toggleFourthStep
    } = this.props;

    setVerificationUserData(verificationThirdStep);
    toggleFourthStep();
  }

  render() {
    return (
      <VerificationThirdStep
        {...this.props}
        onSendVerification={this.onSendVerification.bind(this)}
      />
    );
  }
}

export default compose(
  connect(null, { setVerificationUserData }),
  withRouter
)(VerificationThirdStepContainer);