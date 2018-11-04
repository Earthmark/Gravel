import React, { Component } from 'react';
import update from 'immutability-helper';
import {
  Toolbar,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Tooltip,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  title: {
    flex: '0 0 auto'
  },
  spacer: {
    flex: '1 1 100%'
  }
});

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toAdd: '',
      items: []
    };
  }

  possibleAddPlayer = event => {
    const itemToAdd = event.target.value.trim();
    if (event.charCode === 13 && itemToAdd) {
      this.setState({
        toAdd: '',
        items: [
          {
            name: itemToAdd
          }
        ].concat(this.state.items)
      });
    }
  };

  updateAddablePlayer = event => {
    this.setState({
      toAdd: event.target.value
    });
  };

  delete = index => () => {
    this.setState(
      update(this.state, {
        items: { $splice: [[index, 1]] }
      })
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="title" component="h3">
              Initiative
            </Typography>
          </div>
          <div className={classes.spacer} />
          <div>
            <Tooltip title="Hit Enter to add player">
              <TextField
                label="Add Player"
                value={this.state.toAdd}
                onChange={this.updateAddablePlayer}
                onKeyPress={this.possibleAddPlayer}
              />
            </Tooltip>
          </div>
        </Toolbar>
        {this.state.items.length !== 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>Player</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.items.map((val, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell numeric>
                    <IconButton
                      aria-label="Delete"
                      onClick={this.delete(index)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          []
        )}
      </>
    );
  }
}

export default withStyles(styles)(Game);
