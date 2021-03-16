import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../buttons/main-button';

import verificationFirstStep from '../../../../../assets/images/verification-first-step.PNG';
import VerificationPopup from '../component';

const VerificationFirstStep = (props) => {
	const {
		className,
		toggleSecondStep,
		...restProps
	} = props;

	return (
		<VerificationPopup
			src={verificationFirstStep}
			{...restProps}
		>
			<h2>Verification</h2>
			<p className="verification-popup__text">Verification is a procedure to confirm that a profile actually belongs to creators. Verified profiles have a special check mark badge
				next to their name and they're also shown before other profiles in search results.</p>
			<p className="verification-popup__text">If you want to be verified, keep your profile information up‑to‑date and regularly post new content.
				 You should to send an application.</p>
			<Button caption="Apply" onClick={toggleSecondStep} />
		</VerificationPopup>
	);
};

export default VerificationFirstStep;