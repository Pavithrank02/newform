import React from 'react'
import TeamMemberList from '../components/TeamMemberList'
import { Grid, Typography } from '@mui/material'
import Header from '../components/Header'
import Carousal from '../components/Carousal'

const Home = () => {
  return (
    <div>
      <Grid sx={{width: 100 + "%"}} marginBottom={2}>
          <Header />
      </Grid>
      <Grid sx={{width: 100 + "%"}}>
          <Carousal />
      </Grid>
      <Grid >
        <Typography variant='h3'>
          Team List
        </Typography>
          <TeamMemberList />
      </Grid>
    </div>
  )
}

export default Home