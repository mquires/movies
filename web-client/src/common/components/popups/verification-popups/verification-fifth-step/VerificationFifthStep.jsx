import React from 'react';
import PropTypes from 'prop-types';

import verificationLastStep from '../../../../../assets/images/verification-last-step.PNG';
import VerificationPopup from '../component';

const VerificationFifthStep = (props) => {
	const {
		className,
		...restProps
	} = props;

	return (
		<VerificationPopup
			src={verificationLastStep}
			{...restProps}
		>
			<h2>Application submitted</h2>
			<p className="verification-popup__text">You submitted a verification application [today....]. It is under consideration. 
			Usually, this process takes up to two weeks. We will notify you as soon as a desicion has been made.</p>
		</VerificationPopup>
	);
};

export default VerificationFifthStep;