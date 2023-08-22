import React from 'react'
import ContactForm from '../components/ContactForm'
import { Grid } from '@mui/material'
import Header from '../components/Header'

const Contact = () => {
  return (
   <Grid>
    <Grid marginBottom={2}>
      <Header />
    </Grid>
     <Grid>
      <ContactForm />
    </Grid>
   </Grid>
  )
}

export default Contact