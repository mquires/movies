import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import VerificationFourthStep from '../VerificationFourthStep';
import { setVerificationUserData, applyUserVerificationRequest } from '../../../../../../redux/users-reducer';

class VerificationFourthStepContainer extends React.Component {
  onSendVerification(verificationThirdStep) {
    const {
      setVerificationUserData,
      toggleFifthStep,
      applyUserVerificationRequest,
      verificationUserData
    } = this.props;

    const {
      category,
      country,
      general,
      wikiArticle,
      website,
      socialNetworks
    } = verificationUserData;

    setVerificationUserData(verificationThirdStep);
    applyUserVerificationRequest(category, country, general, wikiArticle, website, socialNetworks);
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