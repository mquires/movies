import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import VerificationFourthStep from '../VerificationFourthStep';
import { setVerificationUserData, applyUserVerificationRequest } from '../../../../../../redux/users-reducer';

class VerificationFourthStepContainer extends React.Component {
  onSendVerification(verificationFourthStep) {
    const {
      setVerificationUserData,
      toggleFifthStep,
      applyUserVerificationRequest,
      verificationUserData
    } = this.props;

    const {
      category,
      country
    } = verificationUserData[0];

    const {
      general,
      wikiArticle
    } = verificationUserData[1];

    const {
      website,
      socialNetworks
    } = verificationFourthStep;

    setVerificationUserData(verificationFourthStep);
    applyUserVerificationRequest(localStorage.getItem('token'), category, country, general, wikiArticle, website, socialNetworks);
    toggleFifthStep();
  }

  render() {
    return (
      <VerificationFourthStep
        {...this.props}
        onSendVerification={this.onSendVerification.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    verificationUserData: state.users.verificationUserData
  }
}

export default compose(
  connect(mapStateToProps, { setVerificationUserData, applyUserVerificationRequest }),
  withRouter
)(VerificationFourthStepContainer);