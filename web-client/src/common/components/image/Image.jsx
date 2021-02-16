import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {
    className,
    src,
    alt,
    onError
  } = props;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={onError}
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
