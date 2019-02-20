import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#1a237e'
    }
  },
  spacing: {
    unit: 8
  }
});

export default Theme;
