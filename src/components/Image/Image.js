import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, className, src }) => (
  <img src={src} alt={alt} className={className} />
);

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
