import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Container = ({
  children,
  classes,
  className,
  ...attributes
}) => (
  <Paper className={classNames(classes.root, className)} elevation={1} {...attributes}>
    {children}
  </Paper>
);

Container.propTypes = {
  square: PropTypes.bool
};

export default withStyles(styles)(Container);
