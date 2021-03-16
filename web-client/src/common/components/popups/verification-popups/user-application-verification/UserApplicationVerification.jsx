import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../buttons/main-button';

import verificationFirstStep from '../../../../../assets/images/verification.png';
import VerificationPopup from '../component';
import CancelButton from '../../../buttons/cancel-button';

import './user-application-popup.scss';

const UserApplicationVerification = (props) => {
	const {
		className,
		toggleSecondStep,
		...restProps
	} = props;

	return (
		<VerificationPopup
			className="user-application-popup"
			src={verificationFirstStep}
			{...restProps}
		>
			<h2>Verification</h2>
			<p className="verification-popup__text">Do you want to verificate this user?</p>
			<div className="user-application-popup__buttons">
				<Button caption="Apply" />
				<CancelButton caption="Decline" />
			</div>
		</VerificationPopup>
	);
};

export default UserApplicationVerification;