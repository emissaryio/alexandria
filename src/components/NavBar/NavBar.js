import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      children,
      className
    } = this.props;

    const {
      value
    } = this.state;


    return (
      <div
        className={classnames('', className)}
      >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton href="/">
              <HomeIcon />
            </IconButton>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              {Children.map(children, child => (
                <Tab label={child.props.label}>
                  {child}
                </Tab>
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
