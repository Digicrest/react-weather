import { Card, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import OpenWeather from '../apis/OpenWeather';
import Loader from './Loader';

function WeatherTileLarge({ weather, time }) {
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
        Feels Like: {parsedWeather.feels_like}°C
      </Typography>
      <Typography>
        {parsedWeather.humidity}
      </Typography>
      <Typography>
        {parsedWeather.pressure} hPa
      </Typography>
      <Typography>
        {parsedWeather.wind} km/h
      </Typography>

      <div className={classes.row}>
        <Card className={classes.subtile}>
          <Typography>Sunrise</Typography>
          <Typography>{parsedWeather.sunrise.date}</Typography>
          <Typography>{parsedWeather.sunrise.time}</Typography>
        </Card>

        <Card className={classes.subtile}>
          <Typography>Sunset</Typography>
          <Typography>{parsedWeather.sunset.date}</Typography>
          <Typography>{parsedWeather.sunset.time}</Typography>
        </Card>      
      </div>
    </Card>
  )
}

export default WeatherTileLarge

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



