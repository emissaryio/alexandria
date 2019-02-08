import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const LinkComponent = ({ to, children }) => (
  <Link component={RouterLink} to={to}>
    {children}
  </Link>
);

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired
};
export default LinkComponent;
