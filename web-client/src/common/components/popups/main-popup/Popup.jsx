import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './popup.scss';

const Popup = (props) => {
	const {
		className,
		children
	} = props;

	return (
		<div class={classNames("overlay", className)}>
			<div class="popup">
				<div class="close">&times;</div>
				<div class="content">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Popup;