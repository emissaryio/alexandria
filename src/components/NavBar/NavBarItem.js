import React from 'react';
import Tab from '@material-ui/core/Tab';
import Link from '../Link';


const NavBarItem = ({ label, to }) => (
  <Tab label={label}>
    <Link to={to}>{label}</Link>
  </Tab>
);

export default NavBarItem;
