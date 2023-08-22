import React, { useState } from 'react'
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ContactForm = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [pin, setPin] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")



  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault()

    if (firstName.length && lastName.length > 15) {
      alert("Please enter a valid name")

    } else if (!email.includes("@")) {
      alert("email is not valid")
    }
    else if (phone.length !== 10) {
      alert("enter valid phone number")
    } else if (pin.length !== 6) {
      alert("enter correct pin code")
    } else if (address.length > 150) {
      alert("please enter characters below 150")
    } else {
      console.log(firstName, lastName, email, gender, phone, address, pin)
    }
  }

  const currencies = [
    {
      value: 'Tamil Nadu',
      label: 'Tamil Nadu',
    },
    {
      value: 'Andhra',
      label: 'Andhra',
    },
    {
      value: 'Karnataka',
      label: 'Karnataka',
    },
    {
      value: 'Kerala',
      label: 'Kerala',
    },
    {
      value: 'Telugana',
      label: 'Telugana',
    },
  ];
  return (


    <form>
      <Grid display={'flex'} flexDirection={'column'} width={250} >
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-required"
            defaultValue="FirstName"
            label="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-required"
            label="LastName"
            defaultValue="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-required"
            defaultValue="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-required"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

        </Grid>
        <Grid>
          <input type='date' />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            type='textArea'
            id="outlined-required"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-required"
            label="Pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </Grid>
        <Grid marginBottom={2}>

          <TextField
            required
            id="outlined-select-currency"
            select
            label="Select State"
            defaultValue="Tamil Nadu"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid marginBottom={2}>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              required
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid marginBottom={2}>

          <Button variant="contained" onClick={handleForm}>Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ContactForm