import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const TableContainer = ({
  children, classes, className, ...attributes
}) => (
  <Paper className={classNames(classes.root, className)}>
    <Table className={classNames(classes.table, className)} {...attributes}>
      {children}
    </Table>
  </Paper>
);

TableContainer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles)(TableContainer);
