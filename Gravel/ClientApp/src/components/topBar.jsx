import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const topBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Gravel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default topBar;
