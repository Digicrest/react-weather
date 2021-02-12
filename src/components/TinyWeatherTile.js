import React from 'react'

function TinyWeatherTile({ weather }) {
  return (
    <div>
      <p>{weather.temp}</p>
    </div>
  )
}

export default TinyWeatherTile
