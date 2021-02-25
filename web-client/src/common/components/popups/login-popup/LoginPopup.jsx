import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

import Popup from '../main-popup';
import Logo from '../../logo';
import Button from '../../buttons/main-button';

import './login-popup.scss';

const LoginPopup = (props) => {
	const {
		className,
		...restProps
	} = props;

	return (
		<Popup
			{...restProps}
			className={classNames("login-popup")}
		>
			<Logo className="login-popup__logo" />
			<div className="login-popup__text">
				<h2>Hi guest!</h2>
				<h2>You need to authorize.</h2>
				<h2>Just do it!</h2>
			</div>
			<NavLink to={ROUTES.LOGIN}>
				<Button caption="Login" />
			</NavLink>
		</Popup>
	);
};

export default LoginPopup;