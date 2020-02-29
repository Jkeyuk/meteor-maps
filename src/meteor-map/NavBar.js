import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  textField: {
    marginRight: theme.spacing(2),
    backgroundColor: "white"
  },
  toolBar: {
    backgroundColor: "blue"
  }
}));

export default function NavBar() {
  const css = useStyles();
  return (
    <React.Fragment>
      <div className={css.root}>
        <AppBar position="static">
          <Toolbar className={css.toolBar}>
            <Typography variant="h6" className={css.title}>
              Meteor Maps
            </Typography>
            <TextField
              id="outlined-secondary"
              label="Search"
              variant="outlined"
              className={css.textField}
            />
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
