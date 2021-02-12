import React from 'react'
import { PermDeviceInformation } from '@material-ui/icons'
import { Typography } from '@material-ui/core'

function About() {
  return (
    <div>
      <Typography variant="h1">
        About
      </Typography>
      <PermDeviceInformation fontSize="large" />
    </div>
  )
}

export default About
