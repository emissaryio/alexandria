import React from 'react';
import { storiesOf } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import NavBar from '../src/components/NavBar';


storiesOf('NavBar', module)
  .addDecorator(withTests('NavBar'))
  .addWithJSX('default', () => (
    <NavBar>
      <a label="Item 1" href="#Item1">Item 1</a>
      <a label="Item 2" href="#Item1">Item 2</a>
      <a label="Item 3" href="#Item1">Item 3</a>
    </NavBar>
  ));

storiesOf('NavBar', module)
  .addDecorator(withTests('NavBar'))
  .addWithJSX('MORE', () => (
    <NavBar>
      <a label="Item 5" href="#Item1">Item 1</a>
      <a label="Item 6" href="#Item1">Item 2</a>
      <a label="Item 7" href="#Item1">Item 3</a>
    </NavBar>
  ));
