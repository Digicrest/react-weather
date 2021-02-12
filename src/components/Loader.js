import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import './css/loaders/Bouncer.css'
import './css/loaders/Spinner.css'
import './css/loaders/Square.css'

function getLoader(type) {
  switch(type) {
    case "bouncer": {
      return (
        <div className="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }
    case "square": {
      return (
        <div className="square">
          <div></div>
          <div></div>
        </div>
      );
    }
    case "spinner":
    default: {
      return (
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      );
    }
  }
}

function Loader({ type }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {getLoader(type)}
    </div>
  )
}

export default Loader

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    margin: theme.spacing(3),
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.primary.main,
  }
}))