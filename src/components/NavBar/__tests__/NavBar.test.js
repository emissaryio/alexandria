import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
      >
        <a label="Item 1" href="#Item1">Item 1</a>
        <a label="Item 2" href="#Item1">Item 2</a>
        <a label="Item 3" href="#Item1">Item 3</a>
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        className="custom-nav-bar"
      >
        <a label="Item 1" href="#Item1">Item 1</a>
        <a label="Item 2" href="#Item1">Item 2</a>
        <a label="Item 3" href="#Item1">Item 3</a>
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
