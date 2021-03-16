import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popup from '../../main-popup';
import Image from '../../../image';

import './verification-popup.scss';

const VerificationPopup = (props) => {
  const {
    className,
    children,
    src,
    ...restProps
  } = props;

  return (
    <Popup
      {...restProps}
      className={classNames("verification-popup")}
    >
      <div className="verification-popup__image-container">
        <Image
          className="verification-popup__image"
          alt="Verification"
          src={src}
        />
      </div>
      <div className="verification-popup__content">
        {children}
      </div>
    </Popup>
  );
};

export default VerificationPopup;