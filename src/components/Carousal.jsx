import React from 'react'
import { SliderData } from './SliderData';
import ImageSlider from './Image';
import { Grid } from '@mui/material';
import { Flare } from '@mui/icons-material';

const Carousal = () => {
  return (
    <Grid sx={{width: 120 + "%"}} display={'flex'} >
      <ImageSlider slides={SliderData} />
      </Grid >
  )
}

export default Carousal