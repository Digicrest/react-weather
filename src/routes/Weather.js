import React, { useState, useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import WeatherTileSmall from '../components/WeatherTileSmall';
import WeatherTileLarge from '../components/WeatherTileLarge';

function Weather({ weather, onUpdateWeather, onUpdateLocation }) {
  const classes = useStyles();
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const trackTime = setInterval(() => setTime(new Date()), 1000)
    return () => {
      clearInterval(trackTime)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button onClick={onUpdateLocation}>
          Set Location
        </Button>
        <Button onClick={onUpdateWeather}>
          {weather ? 'Update' : 'Fetch'} Weather
        </Button>
      </div>
      <div className={classes.content}>
        <WeatherTileSmall weather={weather} time={time} />
        <WeatherTileLarge weather={weather} time={time} />
      </div>
    </div>
  )
}

export default Weather

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