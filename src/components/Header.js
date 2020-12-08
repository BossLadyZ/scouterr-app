import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { fire } from "../config/fire";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#2b9348",
  },
  title: {
    flexGrow: 1,
  },
});

const logout = () => {
  fire
    .signOut()
    .then((u) => {
      console.log("Sign out succesfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Scouterr App
          </Typography>
          <Button onClick={logout} color="inherit">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
