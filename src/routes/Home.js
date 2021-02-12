import React, { useState, useEffect } from 'react'
import { HomeOutlined } from '@material-ui/icons'
import { Button, makeStyles } from '@material-ui/core'

function Home({ openWeather }) {
  const [weather, setWeather] = useState(null)

  const classes = useStyles();

  function updateWeather() {
    openWeather.getWeather().then(setWeather)
  }

  useEffect(() => {
    if (weather) {
      console.log('weather: ', weather)
      const date = new Date(Date(weather.sys.sunrise))
      console.log(date)
    }
  }, [weather])

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <HomeOutlined fontSize="large" />
        <Button onClick={updateWeather}>
          {weather ? 'Update' : 'Fetch'} Weather
        </Button>
      </header>

      <div className={classes.content}>

      </div>
    </div>
  )
}

export default Home

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  header: {
    backgroundColor: '#f00'
  },
  content: {

  }
}))