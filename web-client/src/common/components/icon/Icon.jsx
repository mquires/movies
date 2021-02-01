import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.scss';

const Icon = (props) => {
  const {
    className,
    viewBox,
    glyph,
    ...restProps
  } = props;

  return (
    <svg
      className={classNames('icon', className)}
      viewBox={viewBox}
      {...restProps}
    >
      <use
        xlinkHref={`#${glyph}`}
      />
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
  glyph: undefined,
  viewBox: undefined,
};


export default Icon;