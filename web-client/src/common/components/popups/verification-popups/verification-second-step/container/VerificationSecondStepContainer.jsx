import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import VerificationSecondStep from '../VerificationSecondStep';
import { setVerificationUserData } from '../../../../../../redux/users-reducer';

class VerificationSecondStepContainer extends React.Component {
  onSendVerification(verificationSecondStep) {
    const {
      setVerificationUserData,
      toggleThirdStep
    } = this.props;

    setVerificationUserData(verificationSecondStep);
    toggleThirdStep();
  }

  render() {
    return (
      <VerificationSecondStep
        {...this.props}
        onSendVerification={this.onSendVerification.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    additionalUserData: state.users.additionalUserData
  }
}

export default compose(
  connect(mapStateToProps, { setVerificationUserData }),
  withRouter
)(VerificationSecondStepContainer);