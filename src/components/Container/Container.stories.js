import React from 'react';
import { storiesOf } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import Theme from '../../hocs/withTheme';
import Container from './Container';


const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

storiesOf('Container', module)
  .addDecorator(withTests('Container'))
  .addWithJSX('default', () => (
    <MuiThemeProvider theme={Theme}>
      <Container className="styled-container">
        <Typography variant="h5" component="h3">
          This is a Component.
        </Typography>
        <Typography component="p">
          This component can be used to build surface or other elements for the application.
        </Typography>
      </Container>
    </MuiThemeProvider>
  ));

storiesOf('Container', module)
  .addDecorator(withTests('Container'))
  .addWithJSX('Styled', () => (
    <MuiThemeProvider theme={Theme}>
      <StyledContainer>
        <Typography variant="h5" component="h3">
          This is a Component.
        </Typography>
        <Typography component="p">
          This component can be used to build surface or other elements for the application.
        </Typography>
      </StyledContainer>
    </MuiThemeProvider>
  ));
