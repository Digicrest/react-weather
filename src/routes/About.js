import React from "react";
import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

function About() {
  const classes = useStyles();
  const goBack = () => window.history.back();

  return (
    <div className={classes.root}>
      <img
        src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif"
        alt="404"
      />

      <div className={classes.goBack} onClick={goBack}>
        <IconButton >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">Back</Typography>
      </div>
    </div>
  );
}

export default About;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  goBack: {
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    cursor: "pointer"
  },
}));
