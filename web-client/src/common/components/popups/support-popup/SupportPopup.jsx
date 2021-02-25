import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../main-popup';
import SupportForm from '../../forms/support-form';

import './support-popup.scss';
import Logo from '../../logo';

const SupportPopup = (props) => {
  const {
    className,
    onSubmit,
    ...restProps
  } = props;

  return (
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
  );
};

export default SupportPopup;