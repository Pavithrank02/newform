import React from 'react'
import PostList from '../components/IndividualPost'
import { Grid, Typography } from '@mui/material'
import Header from '../components/Header'

const PostDetails = () => {
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
        <PostList />
      </Grid>
    </Grid>
  </Grid>

  )
}

export default PostDetails