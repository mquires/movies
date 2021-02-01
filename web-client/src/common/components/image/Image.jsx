import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {
    className,
    src,
    alt,
  } = props;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: undefined,
};

export default Image;
