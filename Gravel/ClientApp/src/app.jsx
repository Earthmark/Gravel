import React from 'react';
import TopBar from './components/topBar';
import Initiative from './components/initiative';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: 700
  }
});

const App = props => {
  const { classes } = props;

  return (
    <>
      <TopBar />
      <div className={classes.toolbar} />
      <Grid container spacing={16} direction="column" alignItems="center">
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Initiative />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(App);
