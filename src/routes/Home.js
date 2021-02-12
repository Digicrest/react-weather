import React from 'react'
import { HomeOutlined } from '@material-ui/icons'
import { Typography } from '@material-ui/core'

function Home() {
  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <HomeOutlined fontSize="large" />
    </div>
  )
}

export default Home
