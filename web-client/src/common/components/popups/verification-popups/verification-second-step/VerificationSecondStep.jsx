import React from 'react';
import PropTypes from 'prop-types';

import verificationFirstStep from '../../../../../assets/images/verification-first-step.PNG';
import VerificationPopup from '../component';
import Avatar from '../../../avatar';
import VerificationSecondStepForm from '../../../forms/verification-forms/verification-second-step-form';

import noAvatar from '../../../../../assets/images/no-avatar.jpg';

import './verification-second-step.scss';

const VerificationSecondStep = (props) => {
	const {
		className,
		onSendVerificationUserData,
		onSendVerification,
		additionalUserData,
		name,
		...restProps
	} = props;

	return (
		<VerificationPopup
			className="verification-second-step"
			src={verificationFirstStep}
			{...restProps}
		>
			<h2>Verification application</h2>
			<p className="verification-popup__text">Answer a few questions to help us understand more about you.</p>
			<div className="verification-second-step__user">
				<Avatar
					className="verification-second-step__user-avatar"
					src={!additionalUserData.avatarImage ? noAvatar : additionalUserData.avatarImage}
					alt={name}
				/>
				<h3 className="verification-second-step__name">{name}</h3>
			</div>
			<VerificationSecondStepForm
				className="verification-second-step__form"
				onSubmit={onSendVerification}
			/>
		</VerificationPopup>
	);
};

export default VerificationSecondStep;