import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

import Popup from '../main-popup';
import Logo from '../../logo';
import Button from '../../buttons/main-button';
import Icon from '../../icon';

import dangerousIcon from '../../../../assets/icons/dangerous-alert.svg';

import './dangerous-popup.scss';
import CancelButton from '../../buttons/cancel-button';

const DangerousPopup = (props) => {
	const {
		className,
		cancelClick,
		onDeleteUser,
		...restProps
	} = props;

	return (
		<Popup
			{...restProps}
			className={classNames("login-popup")}
		>
			<Logo className="login-popup__logo" />
			<Icon
				className="dangerous-popup__danger"
				glyph={dangerousIcon.id}
				viewBox={dangerousIcon.viewBox}
			/>
			<div className="login-popup__text">
				<h2>Warning!</h2>
				<p>Do you really want to delete your account?</p>
			</div>
			<div className="dangerous-popup__buttons">
				<Button caption="Delete" onClick={onDeleteUser} />
				<CancelButton caption="Cancel" onClick={cancelClick} />
			</div>
		</Popup>
	);
};

export default DangerousPopup;