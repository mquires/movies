import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

export default function Button(props) {
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
  type: 'button',
  className: undefined,
  caption: undefined,
  onClick: undefined,
};
