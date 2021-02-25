import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from 'react-drag-drawer';

import './popup.scss';

const Popup = (props) => {
	const {
		className,
		children,
		open,
		onRequestClose
	} = props;

	return (
		<Drawer
			open={open}
			onRequestClose={onRequestClose}
		>
			<div className={classNames("popup", className)}>
				{children}
			</div>
		</Drawer>
	);
};

export default Popup;