import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../main-popup';
import ReportForm from '../../forms/report-form';

import './report-popup.scss';

const ReportPopup = (props) => {
  const {
    className,
    onSubmit,
    ...restProps
  } = props;

  return (
    <Popup
      {...restProps}
      className={classNames("report-popup")}
    >
      <h3 className="report-popup__popup-title">Describe your report</h3>
      <ReportForm onSubmit={onSubmit} />
    </Popup>
  );
};

export default ReportPopup;