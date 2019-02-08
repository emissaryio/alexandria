import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';
import NavBarItem from '../NavBarItem';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
      >
        <NavBarItem label="Item 1" to="#Item1" />
        <NavBarItem label="Item 2" to="#Item2" />
        <NavBarItem label="Item 3" to="#Item3" />
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
        <NavBarItem label="Item 1" to="#Item1" />
        <NavBarItem label="Item 2" to="#Item2" />
        <NavBarItem label="Item 3" to="#Item3" />
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
