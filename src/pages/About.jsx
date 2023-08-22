import React from 'react'
import Header from '../components/Header'
import { Grid, Typography } from '@mui/material'
import ImageList from '../components/ImageLists'
import ImageLists from '../components/ImageLists'

const About = () => {
  return (
    <div>
      <Grid marginBottom={2}>
        <Header />
      </Grid>
      <Grid>
        <Typography variant='body'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Typography>
      </Grid>
      <Grid>
        <ImageLists />
      </Grid>
    </div>
  )
}

export default About