import React from 'react';
import PropTypes from 'prop-types';

import verificationFirstStep from '../../../../../assets/images/verification-first-step.PNG';
import VerificationPopup from '../component';
import VerificationThirdStepForm from '../../../forms/verification-forms/verification-third-form';

const VerificationThirdStep = (props) => {
	const {
		className,
		onSendVerificationUserData,
		onSendVerification,
		...restProps
	} = props;

	return (
		<VerificationPopup
			src={verificationFirstStep}
			{...restProps}
		>
			<h2>Verification application</h2>
			<p className="verification-popup__text">Enter additional information about your profile and upload the necessary documents.</p>
			<VerificationThirdStepForm
				onSubmit={onSendVerification}
			/>
		</VerificationPopup>
	);
};

export default VerificationThirdStep;