import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle } = props;

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
