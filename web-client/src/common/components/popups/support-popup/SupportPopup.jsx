import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../main-popup';
import SupportForm from '../../forms/support-form';
import Logo from '../../logo';
import PageWithSuccessMessage from '../../page-components/page-with-success-message';

import './support-popup.scss';

const SupportPopup = (props) => {
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
        className={classNames("support-popup")}
      >
        <div className="support-popup__logo-side">
          <Logo />
          <h3 className="support-popup__popup-title">Hi! How we can help?</h3>
        </div>
        <SupportForm onSubmit={onSubmit} />
      </Popup>
    </PageWithSuccessMessage>
  );
};

export default SupportPopup;