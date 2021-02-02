import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BUTTON_TYPES from '../../constants/button-types';

import './button.scss';

const Button = (props) => {
  const {
    className,
    type,
    onClick,
    caption,
    ...restProps
  } = props;

  return (
    <button
      className={classNames('button', className)}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {caption}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  caption: PropTypes.string,
};

Button.defaultProps = {
  type: BUTTON_TYPES.BUTTON,
  className: undefined,
  caption: undefined,
  onClick: undefined,
};

export default Button;