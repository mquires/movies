import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../main-popup';
import ReportForm from '../../forms/report-form';
import PageWithSuccessMessage from '../../page-components/page-with-success-message';

import './report-popup.scss';

const ReportPopup = (props) => {
  const {
    className,
    onSubmit,
    successSending,
    ...restProps
  } = props;

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="Submit successfully"
    >
      <Popup
        {...restProps}
        className={classNames("report-popup")}
      >
        <h3 className="report-popup__popup-title">Describe your report</h3>
        <ReportForm onSubmit={onSubmit} />
      </Popup>
    </PageWithSuccessMessage>
  );
};

export default ReportPopup;