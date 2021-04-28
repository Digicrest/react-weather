import { Card, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import OpenWeather from '../apis/OpenWeather';
import Loader from './Loader';

function WeatherTileSmall({ weather, time }) {
  const classes = useStyles();
  const [parsedWeather, setParsedWeather] = useState(null)
  useEffect(() => {
    if (!weather) return;
    const icon = OpenWeather.getIconClass(weather.weather)
    const sunrise = new Date(weather.sys.sunrise * 1000)
    const sunset = new Date(weather.sys.sunset * 1000)

    setParsedWeather({
      temp: Math.round(weather.main.temp),
      feels_like: Math.round(weather.main.feels_like),
      description: weather.weather[0].description,
      city: weather.name,
      country: weather.sys.country,
      wind: Math.round(weather.wind.speed),
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
      sunrise: {
        time: sunrise.toLocaleTimeString(),
        date: sunrise.toDateString()
      },
      sunset: {
        time: sunset.toLocaleTimeString(),
        date: sunset.toDateString()
      },
      icon: icon
    })
  }, [weather])

  if (!parsedWeather) {
    return (
      <Card className={classes.root}>
        <p>{time.toLocaleTimeString()}</p>
        <Loader type="square" />
      </Card>
    )
  }

  return (
    <Card className={classes.root}>
      <Typography variant='h6'>
        {parsedWeather.city}, {parsedWeather.country}
      </Typography>
      <div className={`${parsedWeather.icon} ${classes.weatherIcon}`}></div>
      <Typography variant='h4'>
        {time.toLocaleTimeString()}
      </Typography>
      <Typography>{parsedWeather.description}</Typography>
      <Typography variant='h5'>
        {parsedWeather.temp}°C
      </Typography>
      <Typography variant='body2'>
        {parsedWeather.feels_like}°C
      </Typography>
    </Card>
  )
}

export default WeatherTileSmall

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    marginTop: theme.spacing(3),
    position: 'relative',
    width: 300,
    minHeight: 150,
    padding: theme.spacing(2)
    // backgroundColor: theme.palette.primary.dark
  },
  weatherIcon: {
    margin: theme.spacing(2),
    fontSize: theme.typography.h2.fontSize
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  subtile: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}))



