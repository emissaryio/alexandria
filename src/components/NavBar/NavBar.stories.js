import React from 'react';
import { storiesOf } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import NavBar from './NavBar';
import NavBarItem from './NavBarItem';


storiesOf('NavBar', module)
  .addDecorator(withTests('NavBar'))
  .addWithJSX('default', () => (
    <NavBar>
      <NavBarItem label="Item 1" to="#Item1" />
      <NavBarItem label="Item 2" to="#Item2" />
      <NavBarItem label="Item 3" to="#Item3" />
    </NavBar>
  ));

storiesOf('NavBar', module)
  .addDecorator(withTests('NavBar'))
  .addWithJSX('MORE', () => (
    <NavBar color="secondary">
      <NavBarItem label="Item 4" to="#Item4" />
      <NavBarItem label="Item 5" to="#Item5" />
      <NavBarItem label="Item 6" to="#Item6" />
      <NavBarItem label="Item 7" to="#Item7" />
      <NavBarItem label="Item 8" to="#Item8" />
    </NavBar>
  ));
