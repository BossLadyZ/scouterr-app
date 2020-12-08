import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonColor: {
    color: "#2b9348",
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
