import React from 'react';
import PropTypes from 'prop-types';

import verificationFirstStep from '../../../../../assets/images/verification-first-step.PNG';
import VerificationPopup from '../component';
import VerificationFourthStepForm from '../../../forms/verification-forms/verification-fourth-form';

const VerificationFourthStep = (props) => {
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
			<p className="verification-popup__text">There's only one step left! Fill out these fields and you'll
			 have a better chance of getting verified.</p>
			<VerificationFourthStepForm
				onSubmit={onSendVerification}
			/>
		</VerificationPopup>
	);
};

export default VerificationFourthStep;