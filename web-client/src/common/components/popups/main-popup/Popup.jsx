import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './popup.scss';
import ReportForm from '../../forms/report-form';

const Popup = (props) => {
	const {
		className,
		children,
		onSubmit
	} = props;

	return (
		<div className={classNames("overlay", className)}>
			<div className="popup">
				<div className="close">&times;</div>
				<div className="content">
					<ReportForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
};

export default Popup;