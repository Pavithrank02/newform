import React from 'react'
import Post from '../components/Post'
import { Grid, Typography } from '@mui/material'
import Header from '../components/Header'

const Posts = () => {
  return (
    <Grid >

      <Grid marginBottom={2}>
        <Header />
      </Grid>
      <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid>
          <Typography variant="h3">
            Post Present
          </Typography>
        </Grid>
        <Post />
      </Grid>
    </Grid>
  )
}

export default Posts