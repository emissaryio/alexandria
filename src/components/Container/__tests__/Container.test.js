import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Container from '../Container';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Container>
        <Typography variant="h5" component="h3">
          This is a Component.
        </Typography>
        <Typography component="p">
          This component can be used to build surface or other elements for the application.
        </Typography>
      </Container>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
