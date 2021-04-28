import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography>Home</Typography>
      </div>
      <div className={classes.content}>
        <Typography>Content</Typography>
      </div>
    </div>
  )
}

export default Home

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    minHeight: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    boxShadow: theme.shadows[1]
  },
  content: {
    flex: 10,
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
}))